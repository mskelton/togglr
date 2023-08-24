'use client'

import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react'
import NextLink from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import TogglrLogo from '../components/TogglrLogo'

const items = [
  { href: 'flags', label: 'Flags' },
  { href: 'users', label: 'Users' },
]

export default function AdminNav() {
  const segment = useSelectedLayoutSegment()

  return (
    <Navbar isBordered maxWidth="full">
      <NavbarBrand>
        <TogglrLogo />
        <p className="font-bold text-inherit">Togglr</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {items.map((item) => (
          <NavbarItem key={item.href} isActive={segment === item.href}>
            <Link
              aria-current={segment === item.href ? 'page' : undefined}
              as={NextLink}
              color={segment === item.href ? 'primary' : 'foreground'}
              href={`/${item.href}`}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="danger" href="#" variant="flat">
            Sign Out
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
