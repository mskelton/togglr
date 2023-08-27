import { Input, Select, SelectItem, Textarea } from "@nextui-org/react"
import slugify from "@sindresorhus/slugify"
import React, { useRef, useState } from "react"
import { flagTypes } from "../types/flag"

export default function AddFlagFields() {
  const slugChanged = useRef(false)
  const [slug, setSlug] = useState("")

  return (
    <>
      <Input
        autoComplete="off"
        autoFocus
        label="Name"
        name="name"
        onChange={(e) => {
          if (!slugChanged.current) {
            setSlug(slugify(e.target.value))
          }
        }}
        variant="bordered"
      />
      <Input
        label="Slug"
        name="slug"
        onChange={(e) => {
          setSlug(e.target.value)
          slugChanged.current = true
        }}
        value={slug}
        variant="bordered"
      />
      <Select
        defaultSelectedKeys={["bool"]}
        items={flagTypes}
        label="Type"
        name="type"
        variant="bordered"
      >
        {(item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        )}
      </Select>
      <Textarea label="Description" name="description" variant="bordered" />
    </>
  )
}
