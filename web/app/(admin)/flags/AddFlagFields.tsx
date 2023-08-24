import { Select, SelectItem, Input, Textarea } from '@nextui-org/react'
import slugify from '@sindresorhus/slugify'
import React, { useRef, useState } from 'react'

const typeOptions = [
  { value: 'bool', label: 'Boolean' },
  { value: 'number', label: 'Number' },
  { value: 'string', label: 'String' },
  { value: 'json', label: 'JSON' },
]

export default function AddFlagFields() {
  const slugChanged = useRef(false)
  const [slug, setSlug] = useState('')

  return (
    <>
      <Input
        name="name"
        autoFocus
        label="Name"
        variant="bordered"
        onChange={(e) => {
          if (!slugChanged.current) {
            setSlug(slugify(e.target.value))
          }
        }}
      />
      <Input
        name="slug"
        value={slug}
        label="Slug"
        variant="bordered"
        onChange={(e) => {
          setSlug(e.target.value)
          slugChanged.current = true
        }}
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
      <Textarea name="description" label="Description" variant="bordered" />
    </>
  )
}
