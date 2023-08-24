'use client'

import { Flag } from '@/app/api/flags'
import {
  Code,
  Link,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react'
import React, { Key } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/navigation'

const columns = [
  { key: 'name', label: 'NAME' },
  { key: 'slug', label: 'SLUG' },
  { key: 'enabled', label: 'ENABLED' },
  { key: 'description', label: 'DESCRIPTION' },
  { key: 'updatedAt', label: 'LAST UPDATED' },
]

const renderCell = (flag: Flag, columnKey: Key) => {
  const cellValue = flag[columnKey as keyof Flag]

  switch (columnKey) {
    case 'name':
      return (
        <Link size="sm" as={NextLink} href={`/flags/${flag.slug}`}>
          {cellValue}
        </Link>
      )
    case 'slug':
      return <Code>{cellValue}</Code>
    case 'enabled':
      return flag.enabled ? 'Yes' : 'No'
    case 'updatedAt':
      return new Date(cellValue as string).toLocaleDateString(undefined, {
        dateStyle: 'medium',
      })
    default:
      return cellValue
  }
}

export interface FlagsTableProps {
  flags: Flag[]
}

export default function FlagsTable({ flags }: FlagsTableProps) {
  const { push } = useRouter()

  return (
    <Table
      aria-labelledby="#page-title"
      onRowAction={(slug) => push(`/flags/${slug}`)}
      selectionMode="single"
      selectionBehavior="toggle"
    >
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>

      <TableBody
        emptyContent={
          'No flags were found. Click the "Add Flag" button to create a new flag.'
        }
        items={flags}
      >
        {(item) => (
          <TableRow key={item.slug} className="cursor-pointer">
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
