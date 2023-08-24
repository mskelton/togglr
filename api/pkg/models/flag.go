package models

import (
	"time"

	"gorm.io/gorm"
)

type FlagType string

const (
	FlagTypeBoolean FlagType = "boolean"
	FlagTypeString  FlagType = "string"
	FlagTypeJson    FlagType = "json"
)

type Flag struct {
	Slug        string         `json:"slug" gorm:"primaryKey;unique;not null;default:null"`
	CreatedAt   time.Time      `json:"createdAt"`
	UpdatedAt   time.Time      `json:"updatedAt"`
	DeletedAt   gorm.DeletedAt `json:"deletedAt" gorm:"index"`
	Name        string         `json:"name"`
	Type        FlagType       `json:"type"`
	Enabled     bool           `json:"enabled"`
	Description string         `json:"description"`
}

func init() {
	DB.AutoMigrate(&Flag{})
}
