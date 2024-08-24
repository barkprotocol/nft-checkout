import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Menu } from 'lucide-react'
import Link from 'next/link'

const HealthOfficerDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger aria-label="Open menu">
        <Menu />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="absolute right-0 mt-2 w-48">
        <DropdownMenuLabel>Health Officer</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href="/healthofficer/donations" passHref>
            Donations
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/healthofficer/history" passHref>
            History
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/" passHref>
            Logout
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default HealthOfficerDropdown
