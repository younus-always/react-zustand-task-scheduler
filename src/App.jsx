import { Badge, Button, Card, DatePicker, Form, Input, Modal, Select, Tag } from "antd"
import { useEffect, useState } from "react";
import Navber from "./components/Navber";
import Footer from "./components/Footer";
import TaskContainer from "./components/TaskContainer";

export const App = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [timer, setTimer] = useState(new Date().toLocaleTimeString())

  const showModal = () => {
    setOpen(true)
    // setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(new Date().toLocaleTimeString())
    }, 1000);
    return () => clearInterval(interval);
  }, [])

  const createTask = (value) => {
    console.log(value)
  }

  return (
    <div className="animate__animated animate__fadeIn bg-gray-200 min-h-screen overflow-hidden">
      <Navber timer={timer} showModal={showModal} />
      <section className="w-full fixed left-0 top-16 h-[calc(100%-128px)] overflow-y-visible overflow-x-auto grid lg:grid-cols-3 gap-5 p-6">
        {/* Highest box */}
        <TaskContainer badgeText="Highest" />
        {/* Medium box */}
        <TaskContainer badgeText="Medium" />
        {/* Lowest box */}
        <TaskContainer badgeText="Lowest" />
      </section>
      <Footer />

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

          <Form.Item name="priority" rules={[{ required: true }]}>
            <Select size="large" placeholder="Select a priority">
              <Select.Option value="highest">Highest</Select.Option>
              <Select.Option value="medium">Medium</Select.Option>
              <Select.Option value="lowest">Lowest</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button htmlType="submit" size="large" type="primary">Submit</Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}