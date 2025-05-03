
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const dailyData = [
  { name: 'Mon', sales: 140, orders: 24 },
  { name: 'Tue', sales: 110, orders: 18 },
  { name: 'Wed', sales: 150, orders: 22 },
  { name: 'Thu', sales: 180, orders: 29 },
  { name: 'Fri', sales: 210, orders: 34 },
  { name: 'Sat', sales: 250, orders: 45 },
  { name: 'Sun', sales: 190, orders: 30 },
];

const weeklyData = [
  { name: 'Week 1', sales: 1200, orders: 180 },
  { name: 'Week 2', sales: 1400, orders: 210 },
  { name: 'Week 3', sales: 1100, orders: 170 },
  { name: 'Week 4', sales: 1600, orders: 250 },
];

const monthlyData = [
  { name: 'Jan', sales: 4500, orders: 720 },
  { name: 'Feb', sales: 5200, orders: 830 },
  { name: 'Mar', sales: 4800, orders: 760 },
  { name: 'Apr', sales: 5800, orders: 920 },
  { name: 'May', sales: 6200, orders: 980 },
];

const topSellingBooks = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', sales: 58, revenue: '$927.42' },
  { id: 2, title: 'Atomic Habits', author: 'James Clear', sales: 52, revenue: '$987.48' },
  { id: 3, title: 'The Psychology of Money', author: 'Morgan Housel', sales: 45, revenue: '$899.55' },
  { id: 4, title: 'Educated', author: 'Tara Westover', sales: 37, revenue: '$554.63' },
  { id: 5, title: 'Dune', author: 'Frank Herbert', sales: 32, revenue: '$447.68' },
];

const AnalyticsPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Sales Analytics</h1>
        <p className="text-muted-foreground">Track and analyze your bookstore performance</p>
      </div>

      <div className="grid gap-6 mb-8">
        <div className="grid gap-6 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$12,628</div>
              <p className="text-xs text-muted-foreground">
                +18% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Books Sold</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">842</div>
              <p className="text-xs text-muted-foreground">
                +11% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Customer Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+24%</div>
              <p className="text-xs text-muted-foreground">
                +56 new customers
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Average Order</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$43.80</div>
              <p className="text-xs text-muted-foreground">
                -2% from last month
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 mb-8">
        <Card>
          <Tabs defaultValue="daily" className="w-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Sales Overview</CardTitle>
                <TabsList className="bg-gray-100">
                  <TabsTrigger value="daily" className="text-xs data-[state=active]:bg-black data-[state=active]:text-white">Daily</TabsTrigger>
                  <TabsTrigger value="weekly" className="text-xs data-[state=active]:bg-black data-[state=active]:text-white">Weekly</TabsTrigger>
                  <TabsTrigger value="monthly" className="text-xs data-[state=active]:bg-black data-[state=active]:text-white">Monthly</TabsTrigger>
                </TabsList>
              </div>
              <CardDescription>
                Sales performance over time
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <TabsContent value="daily">
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={dailyData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f1f1f1" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="sales" stroke="#000000" strokeWidth={2} />
                      <Line type="monotone" dataKey="orders" stroke="#888888" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>
              <TabsContent value="weekly">
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={weeklyData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f1f1f1" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="sales" stroke="#000000" strokeWidth={2} />
                      <Line type="monotone" dataKey="orders" stroke="#888888" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>
              <TabsContent value="monthly">
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f1f1f1" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="sales" stroke="#000000" strokeWidth={2} />
                      <Line type="monotone" dataKey="orders" stroke="#888888" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Sales by Category</CardTitle>
            <CardDescription>
              Distribution of sales across book categories
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={[
                    { category: 'Fiction', sales: 384 },
                    { category: 'Non-Fiction', sales: 276 },
                    { category: 'Self-Help', sales: 128 },
                    { category: 'Biography', sales: 98 },
                    { category: 'Science', sales: 76 },
                    { category: 'Children', sales: 67 },
                  ]}
                >
                  <CartesianGrid stroke="#f1f1f1" />
                  <XAxis type="number" />
                  <YAxis dataKey="category" type="category" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="sales" fill="#000000" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Top Selling Books</CardTitle>
          <CardDescription>Books with the highest sales this month</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50 text-sm text-muted-foreground">
                  <th className="p-3 text-left font-medium">Title</th>
                  <th className="p-3 text-left font-medium">Author</th>
                  <th className="p-3 text-right font-medium">Units Sold</th>
                  <th className="p-3 text-right font-medium">Revenue</th>
                </tr>
              </thead>
              <tbody>
                {topSellingBooks.map((book) => (
                  <tr key={book.id} className="border-b">
                    <td className="p-3 font-medium">{book.title}</td>
                    <td className="p-3 text-muted-foreground">{book.author}</td>
                    <td className="p-3 text-right">{book.sales}</td>
                    <td className="p-3 text-right font-medium">{book.revenue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsPage;
