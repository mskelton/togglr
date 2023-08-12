package routes

import (
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/mskelton/togglr/pkg/types"
)

func ListFlagsHandler(c *gin.Context) {
	type FlagValue struct {
		Type  string `json:"type"`
		Value any    `json:"value"`
	}

	flags := make(map[string]FlagValue)

	flags["flag1"] = FlagValue{Value: true, Type: "boolean"}
	flags["flag2"] = FlagValue{Value: "mark", Type: "string"}

	c.JSON(http.StatusOK, gin.H{"flags": flags})
}

func GetFlagHandler(c *gin.Context) {
	flag := types.Flag{
		Name:      "flag1",
		Type:      types.FlagTypeBoolean,
		Value:     true,
		Enabled:   true,
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
	}

	c.JSON(http.StatusOK, flag)
}

func CreateFlagHandler(c *gin.Context) {
	c.JSON(http.StatusCreated, gin.H{})
}

func UpdateFlagHandler(c *gin.Context) {
	flag := types.Flag{
		Name:      "flag1",
		Type:      types.FlagTypeBoolean,
		Value:     true,
		Enabled:   true,
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
	}

	c.JSON(http.StatusOK, flag)
}

func DeleteFlagHandler(c *gin.Context) {
	c.Status(http.StatusNoContent)
}
