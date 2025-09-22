import { Badge, Button, Card, Form, Input, Modal, Select, Tag } from "antd"
import { Plus } from "lucide-react"
import { useState } from "react";

export const App = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const showModal = () => {
    setOpen(true)
    // setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  };

  const createTask = (value) => {
    console.log(value)

  }

  return (
    <div className="bg-gray-200 min-h-screen overflow-hidden">
      <nav className="bg-white h-16 w-full fixed top-0 left-0">

      </nav>
      <section className="w-full fixed left-0 top-16 h-[calc(100%-128px)] overflow-y-visible overflow-x-auto grid grid-cols-3 gap-5 p-6">
        {/* Highest box */}
        <div className="h-full min-h-0">
          <Badge.Ribbon
            text="Highest"
            className="bg-gradient-to-br from-rose-500 via-pink-500 to-rose-500 font-medium z-50"
          />
          <div className="bg-white p-6 rounded-lg h-full space-y-6 overflow-auto">
            <button onClick={showModal} className="bg-gradient-to-br from-blue-600 via-violet-500 to-blue-600 text-white flex items-center justify-center gap-1 font-medium py-2 px-3 text-xs rounded-md cursor-pointer hover:scale-105 transition duration-300 focus:shadow-lg">
              <Plus className="w-4 h-4" />
              Add Task
            </button>
            <div className="flex flex-col gap-4">
              {
                Array(10).fill(0).map((item, idx) =>
                  <Card hoverable key={idx}>
                    <Card.Meta
                      title="Upload a new video on youtube."
                      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptate facere reiciendis illum praesentium. Aspernatur suscipit reprehenderit ipsum asperiores obcaecati." />
                    <div className="flex items-center justify-between pt-4">
                      <div>
                        <Tag className="font-medium">Pending</Tag>
                        <Tag className="!bg-rose-500 !text-white font-medium">Delete</Tag>
                      </div>
                      <Select size="small" placeholder="Change Status">
                        <Select.Option value="pending">Pending</Select.Option>
                        <Select.Option value="inProgress">InProgress</Select.Option>
                        <Select.Option value="deleted">Deleted</Select.Option>
                      </Select>
                    </div>
                  </Card>
                )
              }
            </div>
          </div>
        </div>
        {/* Medium box */}
        <div className="h-full min-h-0">
          <Badge.Ribbon
            text="Medium"
            className="bg-gradient-to-br from-indigo-500 via-blue-500 to-indigo-500 font-medium z-50"
          />
          <div className="bg-white p-6 rounded-lg h-full space-y-6 overflow-auto">
            <button onClick={showModal} className="bg-gradient-to-br from-blue-600 via-violet-500 to-blue-600 text-white flex items-center justify-center gap-1 font-medium py-2 px-3 text-xs rounded-md cursor-pointer hover:scale-105 transition duration-300 focus:shadow-lg">
              <Plus className="w-4 h-4" />
              Add Task
            </button>
            <div className="flex flex-col gap-4">
              {
                Array(10).fill(0).map((item, idx) =>
                  <Card hoverable key={idx}>
                    <Card.Meta
                      title="Upload a new video on youtube."
                      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptate facere reiciendis illum praesentium. Aspernatur suscipit reprehenderit ipsum asperiores obcaecati." />
                    <div className="flex items-center justify-between pt-4">
                      <div>
                        <Tag className="font-medium">Pending</Tag>
                        <Tag className="!bg-rose-500 !text-white font-medium">Delete</Tag>
                      </div>
                      <Select size="small" placeholder="Change Status">
                        <Select.Option value="pending">Pending</Select.Option>
                        <Select.Option value="inProgress">InProgress</Select.Option>
                        <Select.Option value="deleted">Deleted</Select.Option>
                      </Select>
                    </div>
                  </Card>
                )
              }
            </div>
          </div>
        </div>
        {/* Lowest box */}
        <div className="h-full min-h-0">
          <Badge.Ribbon
            text="Lowest"
            className="bg-gradient-to-br from-amber-500 via-orange-500 to-amber-500 font-medium z-50"
          />
          <div className="bg-white p-6 rounded-lg h-full space-y-6 overflow-auto">
            <button onClick={showModal} className="bg-gradient-to-br from-blue-600 via-violet-500 to-blue-600 text-white flex items-center justify-center gap-1 font-medium py-2 px-3 text-xs rounded-md cursor-pointer hover:scale-105 transition duration-300 focus:shadow-lg">
              <Plus className="w-4 h-4" />
              Add Task
            </button>
            <div className="flex flex-col gap-4">
              {
                Array(10).fill(0).map((item, idx) =>
                  <Card hoverable key={idx}>
                    <Card.Meta
                      title="Upload a new video on youtube."
                      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptate facere reiciendis illum praesentium. Aspernatur suscipit reprehenderit ipsum asperiores obcaecati." />
                    <div className="flex items-center justify-between pt-4">
                      <div>
                        <Tag className="font-medium">Pending</Tag>
                        <Tag className="!bg-rose-500 !text-white font-medium">Delete</Tag>
                      </div>
                      <Select size="small" placeholder="Change Status">
                        <Select.Option value="pending">Pending</Select.Option>
                        <Select.Option value="inProgress">InProgress</Select.Option>
                        <Select.Option value="deleted">Deleted</Select.Option>
                      </Select>
                    </div>
                  </Card>
                )
              }
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-white h-16 w-full fixed bottom-0 left-0">

      </footer>

      {/* Modal */}
      <Modal footer open={open}
        loading={loading}
        onCancel={() => setOpen(false)}
        maskClosable={false}
      >
        <h2 className="font-medium text-lg mb-3">Add New Task</h2>
        <Form onFinish={createTask}>
          <Form.Item name="title" rules={[{ required: true }]}>
            <Input size="large" placeholder="write task name"
              className="focus:shadow-md" />
          </Form.Item>
          <Form.Item name="description" rules={[{ required: true }]}>
            <Input.TextArea size="large" placeholder="write description here"
              className="min-h-40 max-h-60 focus:shadow-md" />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" size="large" type="primary">Submit</Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}