"use client";
import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageCircle, Star, DollarSign, Book, Laptop, Backpack, Search, Bell, Menu } from 'lucide-react'

export default function Navbar() {
    return (
        <header className="border bg-neutral-950 border-b text-white border-gray-800 font-sans">
           
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-purple-500">CollegeMarket</h1>
        
          <div className="flex items-center space-x-4 justify-center">
          
            <nav className="hidden md:flex space-x-4">
              <a href="#" className="hover:text-purple-400 ">Home</a>
              <a href="#" className="hover:text-purple-400">Categories</a>
              <a href="#" className="hover:text-purple-400">Sell</a>
              <a href="#" className="hover:text-purple-400">About</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <MessageCircle className="h-5 w-5" />
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder-avatar.jpg" />
              <AvatarFallback>US</AvatarFallback>
            </Avatar>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header> 
      )
    }