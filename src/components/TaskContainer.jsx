import { Badge, Card, Empty, Select, Tag } from "antd"
import { Plus } from "lucide-react";

const TaskContainer = ({ badgeText, highestTasks, mediumTasks, lowestTasks, showModal }) => {

      const badgeGradient = () => {
            let gradientColor = "";
            if (badgeText === "Highest") {
                  gradientColor = `from-rose-500 via-pink-500 to-rose-500`
            } else if (badgeText === "Medium") {
                  gradientColor = `from-indigo-500 via-blue-500 to-indigo-500 font-medium`
            } else {
                  gradientColor = `from-amber-500 via-orange-500 to-amber-500`
            }
            return gradientColor;
      };

      return (
            <div className="h-80 md:h-[500px] lg:h-full lg:min-h-0">
                  <Badge.Ribbon
                        text={badgeText}
                        className={`bg-gradient-to-br ${badgeGradient()} font-medium z-50`}
                  />
                  <div className="bg-white p-6 rounded-lg h-full space-y-6 overflow-auto">
                        <div className="flex flex-col gap-4">
                              {
                                    highestTasks?.length === 0 ?
                                          <>
                                                <Empty description="There is no task added as highest priority!" />
                                                <button onClick={showModal} className="w-fit mx-auto bg-gradient-to-br from-blue-600 via-violet-500 to-blue-600 text-white flex items-center justify-center gap-1 font-medium py-2 px-3 text-xs rounded-md cursor-pointer hover:scale-105 transition duration-300 focus:shadow-lg">
                                                      <Plus className="w-4 h-4" />
                                                      Add Task
                                                </button>

                                          </>
                                          : highestTasks?.map((item, idx) =>
                                                <Card hoverable key={idx}>
                                                      <Card.Meta
                                                            title={item.title}
                                                            description={item.description} />
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
                              {
                                    mediumTasks?.length === 0 ?
                                          <>
                                                <Empty description="There is no task added as medium priority!" />
                                                <button onClick={showModal} className="w-fit mx-auto bg-gradient-to-br from-blue-600 via-violet-500 to-blue-600 text-white flex items-center justify-center gap-1 font-medium py-2 px-3 text-xs rounded-md cursor-pointer hover:scale-105 transition duration-300 focus:shadow-lg">
                                                      <Plus className="w-4 h-4" />
                                                      Add Task
                                                </button>

                                          </>
                                          :
                                          mediumTasks?.map((item, idx) =>
                                                <Card hoverable key={idx}>
                                                      <Card.Meta
                                                            title={item.title}
                                                            description={item.description} />
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
                              {
                                    lowestTasks?.length === 0 ?
                                          <>
                                                <Empty description="There is no task added as lowest priority!" />
                                                <button onClick={showModal} className="w-fit mx-auto bg-gradient-to-br from-blue-600 via-violet-500 to-blue-600 text-white flex items-center justify-center gap-1 font-medium py-2 px-3 text-xs rounded-md cursor-pointer hover:scale-105 transition duration-300 focus:shadow-lg">
                                                      <Plus className="w-4 h-4" />
                                                      Add Task
                                                </button>

                                          </>
                                          :
                                          lowestTasks?.map((item, idx) =>
                                                <Card hoverable key={idx}>
                                                      <Card.Meta
                                                            title={item.title}
                                                            description={item.description} />
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
      )
}

export default TaskContainer
