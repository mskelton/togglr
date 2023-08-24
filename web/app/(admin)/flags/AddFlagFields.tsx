import { Input, Select, SelectItem, Textarea } from '@nextui-org/react'
import slugify from '@sindresorhus/slugify'
import React, { useRef, useState } from 'react'

const typeOptions = [
  { label: 'Boolean', value: 'bool' },
  { label: 'Number', value: 'number' },
  { label: 'String', value: 'string' },
  { label: 'JSON', value: 'json' },
]

export default function AddFlagFields() {
  const slugChanged = useRef(false)
  const [slug, setSlug] = useState('')

  return (
    <>
      <Input
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
        defaultSelectedKeys={['bool']}
        items={typeOptions}
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
