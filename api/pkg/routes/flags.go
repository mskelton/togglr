package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/mskelton/togglr/pkg/models"
)

func ListFlagsHandler(ctx *gin.Context) {
	var flags []models.Flag
	models.DB.Limit(20).Find(&flags)

	ctx.JSON(http.StatusOK, gin.H{"flags": flags})
}

func GetFlagHandler(c *gin.Context) {
	var flag models.Flag
	models.DB.Find(&flag, "slug = ?", c.Param("slug"))
	if flag.Slug == "" {
		c.AbortWithStatusJSON(http.StatusNotFound, gin.H{"error": "flag not found"})
		return
	}

	c.JSON(http.StatusOK, flag)
}

type CreateFlagRequest struct {
	Slug        string          `json:"slug" binding:"required"`
	Name        string          `json:"name" binding:"required"`
	Type        models.FlagType `json:"type" binding:"required"`
	Description string          `json:"description"`
}

func CreateFlagHandler(c *gin.Context) {
	var data CreateFlagRequest
	if err := c.ShouldBindJSON(&data); err != nil {
		c.Error(err)
		c.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	flag := models.Flag{
		Slug:        data.Slug,
		Name:        data.Name,
		Type:        data.Type,
		Description: data.Description,
	}

	tx := models.DB.Create(&flag)
	if tx.Error != nil {
		c.Error(tx.Error)
		c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"error": tx.Error.Error()})
		return
	}

	c.JSON(http.StatusCreated, flag)
}

func UpdateFlagHandler(c *gin.Context) {
	var body models.Flag
	if err := c.ShouldBindJSON(&body); err != nil {
		c.Error(err)
		c.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": "failed to parse request body"})
		return
	}

	var flag models.Flag
	models.DB.Find(&flag, "slug = ?", body.Slug)
	if flag.Slug == "" {
		c.AbortWithStatusJSON(http.StatusNotFound, gin.H{"error": "flag not found"})
		return
	}

	tx := models.DB.Model(&flag).
		Where("slug = ?", c.Param("slug")).
		Updates(&body)

	if tx.Error != nil {
		c.Error(tx.Error)
		c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"error": "failed to update flag"})
		return
	}

	c.JSON(http.StatusOK, flag)
}

func DeleteFlagHandler(c *gin.Context) {
	tx := models.DB.Delete(&models.Flag{}, "slug = ?", c.Param("slug"))
	if tx.Error != nil {
		c.Error(tx.Error)
		c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"error": "failed to delete flag"})
		return
	}

	c.Status(http.StatusNoContent)
}
