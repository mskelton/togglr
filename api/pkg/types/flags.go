package types

import "time"

type FlagType string

const (
	FlagTypeBoolean FlagType = "boolean"
	FlagTypeString  FlagType = "string"
	FlagTypeJson    FlagType = "json"
)

type Flag struct {
	Name      string    `json:"name"`
	Enabled   bool      `json:"enabled"`
	Type      FlagType  `json:"type"`
	Value     any       `json:"value"`
	CreatedAt time.Time `json:"createdAt"`
	UpdatedAt time.Time `json:"updatedAt"`
}
