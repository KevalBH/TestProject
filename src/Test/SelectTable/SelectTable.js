import React, { useState } from 'react';
import { Modal, Row, Col, Select } from 'antd'
import styled from 'styled-components';

import DiningTableH from './Shapes/Table/DiningTable'
import DiningTableV from './Shapes/TableV/DiningTable'

import { URL } from '../../config'
import useFetch from '../../hooks/useFetch'

function SelectTable({ restaurantId }) {

    const [tableData, setTableData] = useState([
        { seats: 4, vertical: false, position: { x: 0, y: 0 }, type: 4, selected: false },
        { seats: 6, vertical: true, position: { x: 220, y: 39 }, type: 4, selected: false },
        { seats: 4, vertical: false, position: { x: 460, y: 0 }, type: 0, selected: false },
    ])

    const [count, refresh] = useState(0)

    // const request = useFetch(URL + `table/restaurant/${restaurantId}`);
    // console.log('data: ', request)

    // if (request.isLoading)
    //     return <LoadingContainer>
    //         <SvgLoading />
    //     </LoadingContainer>


    function handleTableClick(index) {
        console.log('clicked')
        let a = tableData
        a[index].selected = !a[index].selected
        setTableData(a)
        refresh(prev => prev + 1)
    }

    return <>

        <MyModal okText={'Continue'} cancelText={'Back'} title="Select Table" visible={true} >

            {/* Header */}

            <Row gutter={12}>
                <Col span={12}>
                    <Row gutter={10}>
                        <Col span={10}>
                            <MySelect style={{ width: '100%' }} defaultValue={'inside'}>
                                <Select.Option value='inside' >Inside</Select.Option>
                                <Select.Option value='outside' >Outside</Select.Option>
                            </MySelect>
                        </Col>

                        <Col span={14}>
                            <AOContainer> Available: 5 | Occupied: 3</AOContainer>
                        </Col>

                    </Row>

                </Col>

                <Col span={12}>

                    <Row gutter={12} >

                        <Col span={3} />

                        <Col span={9}>

                            <AOContainer>
                                <Row gutter={5}>
                                    <Col span={9}>Icon</Col>
                                    <Col>
                                        <H5>Avg. Wait</H5>
                                        <H3>30 min</H3>
                                    </Col>
                                </Row>
                            </AOContainer>

                        </Col>

                        <Col span={12}>

                            <AOContainer>

                                <Row gutter={5}>
                                    <Col span={6}>Icon</Col>
                                    <Col>
                                        <H5>Current Capacity</H5>
                                        <H3>80% Full</H3>
                                    </Col>
                                </Row>

                            </AOContainer>

                        </Col>

                    </Row>

                </Col>
            </Row>

            <Spacer />

            {/* Table Container */}
            <Container>

                {
                    tableData.map((item, index) => {

                        if (item.vertical)
                            return <DiningTableV onClick={() => handleTableClick(index)} selected={item.selected} chairs={item.seats} type={item.type} id={index + 1} position={item.position} />
                        return <>
                            <DiningTableH onClick={() => handleTableClick(index)} selected={item.selected} chairs={item.seats} type={item.type} id={index + 1} position={item.position} />
                        </>
                    })
                }


            </Container>

        </MyModal>

    </>
}

const MySelect = styled(Select)`

    & .ant-select-selector{
        border-radius: 4px !important;
        padding-top: 2px !important;
        padding-bottom: 1px !important;
        height: unset !important;
        background-color: rgb(237,238,241) !important;
        border-color:transparent !important;
    }

    & .ant-select-selection-item{
        font-weight: bold;
        font-size: 12px;
    }

`

// rgb(237,238,241)

const AOContainer = styled.div`
    background-color: rgb(237,238,241);
    padding: 8px;
    font-size: 12px;
    text-align: center;
    font-weight: 600;
    border-radius: 4px;
`
const LoadingContainer = styled.div`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    background-color: rgb(0,0,0,0.6);

    @keyframes spin{
        0% {
            transform: rotate(0deg)
        }
        100% {
            transform: rotate(360deg)
        }
    }

    & > svg{
        animation: spin 1s infinite;
    }

`
const MyModal = styled(Modal)`

    &{
        width: 680px !important;
    }
    
    & .ant-modal-close-icon{
        font-size: 20px;
    }

    & .ant-modal-header {        

        & .ant-modal-title {

            font-family: Montserrat-Bold;
            font-size: 20px;                        
            color: rgb(255,88,0);
        }
        background-color: rgb(255,246,239);
    }    
`
const H5 = styled.h5`
    margin: 0;
    text-align:left;
`
const H3 = styled.h3`
    margin: 0;
    text-align:left;
`
const Spacer = styled.div`
    height: 20px;
`
const Container = styled.div`
    position: relative;
    width: 100%;
    min-height: 300px;    
    max-width: 100%;    
    overflow-y: scroll;
`

function SvgLoading() {
    return <>
        <svg fill={'white'} xmlns="http://www.w3.org/2000/svg" width={100} height={100} xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 330 330" xmlSpace="preserve">
            <g id="XMLID_2_">
                <path id="XMLID_4_" d="M97.5,165c0-8.284-6.716-15-15-15h-60c-8.284,0-15,6.716-15,15s6.716,15,15,15h60   C90.784,180,97.5,173.284,97.5,165z" />
                <path id="XMLID_5_" d="M307.5,150h-30c-8.284,0-15,6.716-15,15s6.716,15,15,15h30c8.284,0,15-6.716,15-15S315.784,150,307.5,150z" />
                <path id="XMLID_6_" d="M172.5,90c8.284,0,15-6.716,15-15V15c0-8.284-6.716-15-15-15s-15,6.716-15,15v60   C157.5,83.284,164.216,90,172.5,90z" />
                <path id="XMLID_7_" d="M172.501,240c-8.284,0-15,6.716-15,15v60c0,8.284,6.716,15,15,15c8.284,0,15-6.716,15-15v-60   C187.501,246.716,180.785,240,172.501,240z" />
                <path id="XMLID_8_" d="M77.04,48.327c-5.856-5.858-15.354-5.857-21.213,0c-5.858,5.858-5.858,15.355,0,21.213l42.427,42.428   c2.929,2.929,6.768,4.394,10.606,4.394c3.838,0,7.678-1.465,10.606-4.393c5.858-5.858,5.858-15.355,0-21.213L77.04,48.327z" />
                <path id="XMLID_9_" d="M246.746,218.034c-5.857-5.857-15.355-5.857-21.213,0c-5.858,5.858-5.857,15.355,0,21.213l42.428,42.426   c2.929,2.929,6.768,4.393,10.607,4.393c3.839,0,7.678-1.465,10.606-4.393c5.858-5.858,5.858-15.355,0-21.213L246.746,218.034z" />
                <path id="XMLID_10_" d="M98.254,218.034L55.828,260.46c-5.858,5.858-5.858,15.355,0,21.213c2.929,2.929,6.768,4.393,10.607,4.393   c3.839,0,7.678-1.464,10.606-4.393l42.426-42.426c5.858-5.858,5.858-15.355,0-21.213   C113.609,212.176,104.111,212.176,98.254,218.034z" />
            </g>
        </svg>
    </>
}

export default SelectTable;

