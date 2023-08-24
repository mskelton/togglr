'use client'

import { useSelectedLayoutSegment } from 'next/navigation'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Link,
} from '@nextui-org/react'
import NextLink from 'next/link'
import TogglrLogo from '../components/TogglrLogo'

const items = [
  { href: 'flags', label: 'Flags' },
  { href: 'users', label: 'Users' },
]

export default function AdminNav() {
  const segment = useSelectedLayoutSegment()

  return (
    <Navbar maxWidth="full" isBordered>
      <NavbarBrand>
        <TogglrLogo />
        <p className="font-bold text-inherit">Togglr</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {items.map((item) => (
          <NavbarItem key={item.href} isActive={segment === item.href}>
            <Link
              as={NextLink}
              color={segment === item.href ? 'primary' : 'foreground'}
              href={`/${item.href}`}
              aria-current={segment === item.href ? 'page' : undefined}
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
