
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';

const SettingsPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your account and preferences</p>
      </div>

      <Card>
        <Tabs defaultValue="profile">
          <div className="border-b px-6 pt-6">
            <TabsList className="bg-gray-100">
              <TabsTrigger value="profile" className="data-[state=active]:bg-black data-[state=active]:text-white">
                Admin Profile
              </TabsTrigger>
              <TabsTrigger value="notifications" className="data-[state=active]:bg-black data-[state=active]:text-white">
                Notifications
              </TabsTrigger>
              <TabsTrigger value="store" className="data-[state=active]:bg-black data-[state=active]:text-white">
                Store Settings
              </TabsTrigger>
            </TabsList>
          </div>
          <CardContent className="p-6">
            <TabsContent value="profile">
              <div className="grid gap-6">
                <div className="flex items-center gap-4">
                  <span className="h-20 w-20 rounded-full bg-gray-900 text-white flex items-center justify-center text-xl font-medium">
                    A
                  </span>
                  <Button variant="outline" className="h-9">Change Avatar</Button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="firstname">First Name</Label>
                    <Input id="firstname" placeholder="First Name" defaultValue="Admin" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="lastname">Last Name</Label>
                    <Input id="lastname" placeholder="Last Name" defaultValue="User" />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Email" defaultValue="admin@ankitbooks.com" />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input id="currentPassword" placeholder="Current Password" type="password" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" placeholder="New Password" type="password" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input id="confirmPassword" placeholder="Confirm Password" type="password" />
                  </div>
                </div>

                <Button className="w-fit bg-black text-white hover:bg-gray-800">
                  Update Profile
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="notifications">
              <div className="grid gap-6">
                <div className="grid gap-4">
                  <h3 className="text-lg font-medium">Email Notifications</h3>
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">New Orders</p>
                        <p className="text-sm text-muted-foreground">
                          Receive notifications when new orders are placed
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Low Stock Alerts</p>
                        <p className="text-sm text-muted-foreground">
                          Get notified when books are running low on inventory
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Customer Reviews</p>
                        <p className="text-sm text-muted-foreground">
                          Receive notifications for new book reviews
                        </p>
                      </div>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Marketing Updates</p>
                        <p className="text-sm text-muted-foreground">
                          Receive news about marketing features and tips
                        </p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </div>
                
                <Button className="w-fit bg-black text-white hover:bg-gray-800">
                  Save Notification Settings
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="store">
              <div className="grid gap-6">
                <div className="grid gap-4">
                  <h3 className="text-lg font-medium">Store Information</h3>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="storeName">Store Name</Label>
                      <Input id="storeName" placeholder="Store Name" defaultValue="ANKIT BOOK STORE" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="storePhone">Phone Number</Label>
                      <Input id="storePhone" placeholder="Phone Number" defaultValue="+1 (234) 567-8901" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="storeEmail">Support Email</Label>
                      <Input id="storeEmail" placeholder="Support Email" defaultValue="support@ankitbooks.com" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="storeAddress">Address</Label>
                      <Textarea id="storeAddress" placeholder="Address" defaultValue="123 Bookstore Ave, Reading, CA 98765" />
                    </div>
                  </div>
                </div>

                <div className="grid gap-4">
                  <h3 className="text-lg font-medium">Display Settings</h3>
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Currency Display</p>
                        <p className="text-sm text-muted-foreground">
                          Show currency symbol before price
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Enable Dark Mode</p>
                        <p className="text-sm text-muted-foreground">
                          Use dark theme for the admin dashboard
                        </p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </div>

                <Button className="w-fit bg-black text-white hover:bg-gray-800">
                  Save Store Settings
                </Button>
              </div>
            </TabsContent>
          </CardContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default SettingsPage;
