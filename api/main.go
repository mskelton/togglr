package main

import (
	"context"
	"log"
	"net/http"
	"os"
	"os/signal"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"github.com/mskelton/togglr/pkg/middleware"
	"github.com/mskelton/togglr/pkg/models"
	"github.com/mskelton/togglr/pkg/routes"
)

func main() {
	if err := godotenv.Load(); err != nil {
		log.Println("No .env file found")
	}

	router := gin.Default()
	router.Use(middleware.NoCache)
	router.GET("/", routes.HomeHandler)

	router.GET("/flags", routes.ListFlagsHandler)
	router.GET("/flags/:slug", routes.GetFlagHandler)
	router.POST("/flags", routes.CreateFlagHandler)
	router.PATCH("/flags/:slug", routes.UpdateFlagHandler)
	router.DELETE("/flags/:slug", routes.DeleteFlagHandler)

	srv := &http.Server{
		Addr:         "127.0.0.1:8080",
		WriteTimeout: time.Second * 15,
		ReadTimeout:  time.Second * 15,
		IdleTimeout:  time.Second * 60,
		Handler:      router,
	}

	gracefulShutdown(srv, func() {
		models.Close()
	})
}

func gracefulShutdown(srv *http.Server, onClose func()) {
	// Start the server in a new goroutine so that it doesn't block.
	go func() {
		if err := srv.ListenAndServe(); err != nil {
			log.Println(err)
		}
	}()

	c := make(chan os.Signal, 1)

	// We'll accept graceful shutdowns when quit via SIGINT (Ctrl+C)
	// SIGKILL, SIGQUIT or SIGTERM (Ctrl+/) will not be caught.
	signal.Notify(c, os.Interrupt)

	// Block until we receive our signal.
	<-c

	// Run additional cleanup tasks
	onClose()

	// Create a deadline to wait for.
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*15)
	defer cancel()

	// Doesn't block if no connections, but will otherwise wait
	// until the timeout deadline.
	srv.Shutdown(ctx)

	// <-ctx.Done() if your application should wait for other services
	// to finalize based on context cancellation.
	log.Println("shutting down")
	os.Exit(0)
}
