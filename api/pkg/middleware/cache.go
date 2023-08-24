package middleware

import "github.com/gin-gonic/gin"

func NoCache(ctx *gin.Context) {
	ctx.Header("Cache-Control", "no-cache, no-store, must-revalidate")
	ctx.Next()
}
