'use client'

import {useState, useEffect} from 'react'
import Link from 'next/link'


type NavLink ={ href: string; label: string; }

export default function MobileMenu({navLinks}: {navLinks: NavLink[]}) {}