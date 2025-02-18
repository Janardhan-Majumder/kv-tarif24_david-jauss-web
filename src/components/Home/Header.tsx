"use client";

import React from "react";
import Container from "../Container";
import { Button, Col, Form, Grid, Input, Row, Select } from "antd";
import Image from "next/image";
import TextAnimation from "../ui/TextAnimation";
const { useBreakpoint } = Grid;

const Header = () => {
  const screens = useBreakpoint();
  const onFinish = (values: any) => {
    console.log("Form values:", values);
  };
  console.log(screens);
  const headingText =
    "FIND THE RIGHT PROVIDER TO REDUCE YOUR EXISTING HEALTH INSURANCE PREMIUM WITH THE SAME BENEFITS, WITHOUT OBLIGATION";
  return (
    <div className="relative pb-8">
      <Image
        src="/images/header-bg.png"
        alt="hero"
        className=" absolute -z-10 object-cover object-center"
        fill
        // width={1000}
        // height={1000}
        sizes="100vw"
      />
      <Container className="space-y-10 xl:space-y-14 ">
        {/* <TextAnimation sentence={headingText} /> */}
        <h2 className="text-center text-2xl md:text-3xl lg:text-5xl leading-normal md:leading-normal lg:leading-normal font-semibold font-roboto max-w-6xl mx-auto text-white">
          FIND THE RIGHT PROVIDER TO REDUCE YOUR EXISTING HEALTH INSURANCE
          PREMIUM WITH THE SAME BENEFITS, WITHOUT OBLIGATION
        </h2>
        <div className="max-w-4xl mx-auto bg-[#3c5267c5] p-6 xl:p-10 rounded-lg border border-yellow-400">
          {/* <h2 className="text-white text-center text-xl font-bold mb-4">
            WITHOUT OBLIGATION
          </h2> */}
          <Form layout="vertical" onFinish={onFinish} style={{ marginTop: 20 }}>
            <Row gutter={[28, 16]}>
              <Col xs={24} md={12}>
                <Form.Item
                  name="title"
                  // rules={[{ required: true }]}
                >
                  <Input size={"large"} placeholder="Title" />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  name="insurance"
                  // rules={[{ required: true }]}
                >
                  <Select
                    showSearch
                    size="large"
                    placeholder="Current Insurance"
                    filterOption={(input, option) =>
                      (option?.label ?? "")
                        .toLowerCase()
                        .includes(input.toLowerCase())
                    }
                    options={[
                      { value: "1", label: "insurance1" },
                      { value: "2", label: "insurance2" },
                      { value: "3", label: "insurance3" },
                    ]}
                  />
                </Form.Item>
              </Col>

              <Col xs={24} md={12}>
                <Row gutter={[16, 16]}>
                  <Col xs={12}>
                    <Form.Item
                      name="firstName"
                      // rules={[{ required: true }]}
                    >
                      <Input size="large" placeholder="First Name" />
                    </Form.Item>
                  </Col>
                  <Col xs={12}>
                    <Form.Item
                      name="lastName"
                      // rules={[{ required: true }]}
                    >
                      <Input size="large" placeholder="Last Name" />
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item name="tariff">
                  <Input size="large" placeholder="Name of the Tariff" />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item name="surname">
                  <Input size="large" placeholder="Surname" />
                </Form.Item>
              </Col>

              <Col xs={24} md={12}>
                <Row gutter={[16, 16]}>
                  <Col xs={12}>
                    <Form.Item name="monthlyPremium">
                      <Input size="large" placeholder="Monthly Premium" />
                    </Form.Item>
                  </Col>
                  <Col xs={12}>
                    <Form.Item name="deductible">
                      <Input size="large" placeholder="Deductible" />
                    </Form.Item>
                  </Col>
                </Row>
              </Col>

              <Col span={24} className="text-center">
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  className="font-bold w-full max-w-96"
                >
                  CHECK YOUR TARIFF
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Header;
