const menu = {
    list() {
        return[
            {
                "backMenu": [
                    {
                        "child": [
                            {
                                "buttons": [
                                    "新增",
                                    "查看",
                                    "修改",
                                    "删除"
                                ],
                                "menu": "学生",
                                "menuJump": "列表",
                                "tableName": "xuesheng"
                            }
                        ],
                        "menu": "学生管理"
                    },
                    {
                        "child": [
                            {
                                "buttons": [
                                    "新增",
                                    "查看",
                                    "修改",
                                    "删除"
                                ],
                                "menu": "教师",
                                "menuJump": "列表",
                                "tableName": "jiaoshi"
                            }
                        ],
                        "menu": "教师管理"
                    },
                    {
                        "child": [
                            {
                                "buttons": [
                                    "查看",
                                    "删除"
                                ],
                                "menu": "课程信息",
                                "menuJump": "列表",
                                "tableName": "kechengxinxi"
                            }
                        ],
                        "menu": "课程信息管理"
                    },
                    //{
                    //"child": [
                    // {
                    //"buttons": [
                    // "新增",
                    //"查看",
                    //"修改",
                    //"删除"
                    //],
                    //"menu": "科目分类",
                    //"menuJump": "列表",
                    //"tableName": "kemufenlei"
                    //}
                    //],
                    //"menu": "科目分类管理"
                    //},
                    //{
                    //"child": [
                    // {
                    //"buttons": [
                    //"新增",
                    //"查看",
                    //"修改",
                    //"删除"
                    // ],
                    // "menu": "班级分类",
                    //"menuJump": "列表",
                    //"tableName": "banjifenlei"
                    //}
                    //  ],
                    // "menu": "班级分类管理"
                    //},
                    {
                        "child": [
                            {
                                "buttons": [
                                    "查看",
                                    "删除"
                                ],
                                "menu": "课程作业",
                                "menuJump": "列表",
                                "tableName": "kechengzuoye"
                            }
                        ],
                        "menu": "课程作业管理"
                    },
                    {
                        "child": [
                            {
                                "buttons": [
                                    "查看",
                                    "删除"
                                ],
                                "menu": "交流论坛",
                                "tableName": "forum"
                            }
                        ],
                        "menu": "交流论坛"
                    },
                    {
                        "child": [
                            {
                                "buttons": [
                                    "新增",
                                    "查看",
                                    "修改",
                                    "删除"
                                ],
                                "menu": "轮播图管理",
                                "tableName": "config"
                            },
                            {
                                "buttons": [
                                    "新增",
                                    "查看",
                                    "修改",
                                    "删除"
                                ],
                                "menu": "课程通知",
                                "tableName": "news"
                            }
                        ],
                        "menu": "系统管理"
                    }
                ],
                "frontMenu": [
                    {
                        "child": [
                            {
                                "buttons": [
                                    "查看"
                                ],
                                "menu": "课程信息列表",
                                "menuJump": "列表",
                                "tableName": "kechengxinxi"
                            }
                        ],
                        "menu": "课程信息模块"
                    },
                    {
                        "child": [
                            {
                                "buttons": [
                                    "查看",
                                    "提交"
                                ],
                                "menu": "课程作业列表",
                                "menuJump": "列表",
                                "tableName": "kechengzuoye"
                            }
                        ],
                        "menu": "课程作业模块"
                    }
                ],
                "hasBackLogin": "是",
                "hasBackRegister": "否",
                "hasFrontLogin": "否",
                "hasFrontRegister": "否",
                "roleName": "管理员",
                "tableName": "users"
            },
            {
                "backMenu": [
                    {
                        "child": [
                            {
                                "buttons": [
                                    "查看",
                                    "修改",
                                    "删除"
                                ],
                                "menu": "作业提交",
                                "menuJump": "列表",
                                "tableName": "zuoyetijiao"
                            }
                        ],
                        "menu": "作业提交管理"
                    },
                    {
                        "child": [
                            {
                                "buttons": [
                                    "查看"
                                ],
                                "menu": "作业批改",
                                "menuJump": "列表",
                                "tableName": "zuoyepigai"
                            }
                        ],
                        "menu": "作业批改管理"
                    }
                ],
                "frontMenu": [
                    {
                        "child": [
                            {
                                "buttons": [
                                    "查看"
                                ],
                                "menu": "课程信息列表",
                                "menuJump": "列表",
                                "tableName": "kechengxinxi"
                            }
                        ],
                        "menu": "课程信息模块"
                    },
                    {
                        "child": [
                            {
                                "buttons": [
                                    "查看",
                                    "提交"
                                ],
                                "menu": "课程作业列表",
                                "menuJump": "列表",
                                "tableName": "kechengzuoye"
                            }
                        ],
                        "menu": "课程作业模块"
                    }
                ],
                "hasBackLogin": "是",
                "hasBackRegister": "否",
                "hasFrontLogin": "是",
                "hasFrontRegister": "是",
                "roleName": "学生",
                "tableName": "xuesheng"
            },
            {
                "backMenu": [
                    {
                        "child": [
                            {
                                "buttons": [
                                    "新增",
                                    "查看",
                                    "修改",
                                    "删除",
                                    "布置作业"
                                ],
                                "menu": "课程信息",
                                "menuJump": "列表",
                                "tableName": "kechengxinxi"
                            }
                        ],
                        "menu": "课程信息管理"
                    },
                    {
                        "child": [
                            {
                                "buttons": [
                                    "查看",
                                    "删除"
                                ],
                                "menu": "交流论坛",
                                "tableName": "forum"
                            }
                        ],
                        "menu": "交流论坛"
                    },
                    {
                        "child": [
                            {
                                "buttons": [
                                    "查看",
                                    "修改",
                                    "删除"
                                ],
                                "menu": "课程作业",
                                "menuJump": "列表",
                                "tableName": "kechengzuoye"
                            }
                        ],
                        "menu": "课程作业管理"
                    },
                    {
                        "child": [
                            {
                                "buttons": [
                                    "查看",
                                    "删除",
                                    "审核",
                                    "批改"
                                ],
                                "menu": "作业提交",
                                "menuJump": "列表",
                                "tableName": "zuoyetijiao"
                            }
                        ],
                        "menu": "作业提交管理"
                    },
                    {
                        "child": [
                            {
                                "buttons": [
                                    "查看",
                                    "修改",
                                    "删除"
                                ],
                                "menu": "作业批改",
                                "menuJump": "列表",
                                "tableName": "zuoyepigai"
                            }
                        ],
                        "menu": "作业批改管理"
                    }
                ],
                "frontMenu": [
                    {
                        "child": [
                            {
                                "buttons": [
                                    "查看"
                                ],
                                "menu": "课程信息列表",
                                "menuJump": "列表",
                                "tableName": "kechengxinxi"
                            }
                        ],
                        "menu": "课程信息模块"
                    },
                    {
                        "child": [
                            {
                                "buttons": [
                                    "查看",
                                    "提交"
                                ],
                                "menu": "课程作业列表",
                                "menuJump": "列表",
                                "tableName": "kechengzuoye"
                            }
                        ],
                        "menu": "课程作业模块"
                    }
                ],
                "hasBackLogin": "是",
                "hasBackRegister": "否",
                "hasFrontLogin": "是",
                "hasFrontRegister": "是",
                "roleName": "教师",
                "tableName": "jiaoshi"
            }
        ]
    }
}
export default menu;
