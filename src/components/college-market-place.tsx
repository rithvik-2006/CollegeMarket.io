"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageCircle, Star, DollarSign, Book, Laptop, Backpack, Search, Bell, Menu } from 'lucide-react'

export default function CollegeMarketplace() {
  return (
    <div className="min-h-screen bg-neutral-950 text-gray-100">
      
    
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:space-x-8">
          <aside className="w-full md:w-64 mb-8 md:mb-0">
            <Card className="bg-neutral-900">
              <CardHeader>
                <CardTitle>Filters</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium ">Category</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="textbooks">Textbooks</SelectItem>
                        <SelectItem value="electronics">Electronics</SelectItem>
                        <SelectItem value="furniture">Furniture</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Price Range</label>
                    <div className="flex space-x-2">
                      <Input type="number" placeholder="Min" className="w-1/2" />
                      <Input type="number" placeholder="Max" className="w-1/2" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Condition</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select condition" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="like-new">Like New</SelectItem>
                        <SelectItem value="good">Good</SelectItem>
                        <SelectItem value="fair">Fair</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>
          <div className="flex-1">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-4">Featured Listings</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <Card key={item} className="bg-neutral-900">
                    <CardHeader>
                      <img src="/placeholder.svg" alt="Product" className="w-full h-48 object-cover rounded-t-lg" />
                    </CardHeader>
                    <CardContent>
                      <h3 className="font-semibold text-lg mb-2">Product Name</h3>
                      <p className="text-gray-400 mb-2">Brief description of the product goes here.</p>
                      <div className="flex items-center justify-between">
                        <span className="text-purple-400 font-bold">$XX.XX</span>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 mr-1" />
                          <span>4.5</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Chat
                      </Button>
                      <Button variant="default" size="sm">
                        <DollarSign className="h-4 w-4 mr-2" />
                        Buy Now
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-neutral-900 text-gray-400 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-purple-400">About Us</a></li>
                <li><a href="#" className="hover:text-purple-400">Contact</a></li>
                <li><a href="#" className="hover:text-purple-400">FAQ</a></li>
                <li><a href="#" className="hover:text-purple-400">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Popular Categories</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-purple-400">Textbooks</a></li>
                <li><a href="#" className="hover:text-purple-400">Electronics</a></li>
                <li><a href="#" className="hover:text-purple-400">Furniture</a></li>
                <li><a href="#" className="hover:text-purple-400">Clothing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
              <p className="mb-4">Sign up for our newsletter to get the latest deals and updates.</p>
              <div className="flex">
                <Input type="email" placeholder="Enter your email" className="rounded-r-none" />
                <Button className="rounded-l-none">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 College Marketplace. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}