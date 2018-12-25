import React,{Component} from 'react';
import { Table,Modal, Button, Form, Input,Upload,Icon} from 'antd';
import { connect } from 'dva';
import SampleChart from '../../component/SampleChart';
import text from './test.less'

/*
const fileList = [{
    uid: '-1',
    name: 'xxx.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
}, {
    uid: '-2',
    name: 'yyy.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
}];
*/

const props2 = {
    action: '//jsonplaceholder.typicode.com/posts/',/*上传地址*/
    listType: 'picture',/*上传列表的内建样式*/
    defaultFileList:[],/*[...fileList]默认已经上传的文件列表*/
    className: 'upload-list-inline',
    onChange(info){
        if (info.file.status === 'done') {
            console.log(info.fileList)
        } else if (info.file.status === 'error') {

        }
    }
}

const FormItem = Form.Item;
const mapStateToProps = (state) => {
    return {
        data:state['data_list'].data,
        chartData:state['data_list'].chartData
    }
}
const mapDispachToProps = (dispatch) => {
    return {
        loadData:() => {
            const action = {
                type:'data_list/init'
            }
            dispatch(action);
        },
        addOne:(value) => {
            const action={
                type:'data_list/addOne',
                payload: value
            }
            dispatch(action);
        },
        getChartDataAction:(id) => {
            dispatch({
                type:'data_list/getChartData',
                payload: id
            })
        }

    }
}

@connect(mapStateToProps,mapDispachToProps)
class List extends  Component{
    constructor(){
        super();
        this.state = {
            visible:false,
            chartVisible:false
        }
    }
    columns = [{
        title: '名称',/*标题*/
        dataIndex: 'name',/*对应的字段名称*/
        },{
            title: '描述',
            dataIndex: 'desc',
        },{
            title: '链接',
            dataIndex: 'url',
            render(value) {
                return (
                    <a href={value}>{value}</a>
                );
            },
        },{
            title:"图表",
            dataIndex:"chart",
            render:(_,{id}) => {
                return (
                    <Button onClick={() => this.getChartData(id)}>图表</Button>
                );
            }
        }
    ]
    showModal = () => {
        this.setState({
            visible:true
        })
    }
    getChartData = (id) => {
        this.props.getChartDataAction(id);
        this.setState({
            chartVisible:true
        })

    }
    handleCancel = (e) => {
        this.setState({
            visible:false
        })
    }
    handleChartCancel = (e) => {
        this.setState({
            chartVisible:false
        })
    }
    handleOk = () => {
        const {addOne,form: { validateFields }} = this.props;
            validateFields((err,value) => {
                if (!err) {
                    addOne(value);
                    // 重置 `visible` 属性为 false 以关闭对话框
                }
                this.setState({ visible: false });
            })
     }
    componentWillMount(){
        this.props.loadData();
    }
    render(){
        const { data, cardsLoading, form: { getFieldDecorator },chartData} = this.props;
        const { visible} = this.state;
        /*我们可以看到表单组件是通过 Form 与 Form.Item (我们之前定义了 FormItem = Form.item) 配合使用，其中每一个 Form.Item 都是一个表单域。
        而 getFieldDecorator 是用于将包裹的组件与表单进行双向绑定使用。*/
        return (
            <div className={text.text}>
                <Table columns={this.columns} dataSource={ data} rowKey="id"  />
                <Button onClick={this.showModal}>新建</Button>

                <Upload {...props2}>
                    <Button>
                        <Icon type="upload"/> Upload
                    </Button>
                </Upload>

                <Modal title="新建记录"
                    visible={visible}
                       onCancel={this.handleCancel}
                       onOk={this.handleOk}
                >
                    <Form>
                        <FormItem label="名称">
                            {getFieldDecorator("name",{
                                rules:[{
                                    required:true
                                }]
                            })(
                                <Input/>
                            )}
                        </FormItem>
                        <FormItem label="描述">
                            {getFieldDecorator("desc",{
                                rules:[{
                                    required:true
                                }]
                            })(
                                <Input/>
                            )}
                        </FormItem>
                        <FormItem label="地址">
                            {getFieldDecorator("url",{
                                rules:[{
                                    type: "url"
                                }]
                            })(
                                <Input/>
                            )}
                        </FormItem>
                    </Form>
                </Modal>

                <Modal visible={this.state.chartVisible} footer={null} onCancel={this.handleChartCancel}>
                    <SampleChart data={chartData.data} />
                </Modal>
            </div>


        )
    }

}

/*export default connect(mapStateToProps)(Form.create()(List));  Form.create()(List) 这段代码的作用是创建一个高阶组件，为页面组件 List 提供表单所需要的内容(this.props.form)。*/

export default Form.create()(List);