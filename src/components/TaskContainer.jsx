import { Badge, Card, Select, Tag } from "antd"

const TaskContainer = ({ badgeText }) => {

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
      )
}

export default TaskContainer
