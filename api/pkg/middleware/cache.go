package middleware

import "github.com/gin-gonic/gin"

func NoCache() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Header("Cache-Control", "no-cache, no-store, must-revalidate")
		c.Next()
	}
}
