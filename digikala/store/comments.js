export const state = () =>({
    comments: []
})

export const mutations = {
    setComments(state, comments) {
      state.comments = comments
    },
    ADD_USER_OPINION: (state, {id, data}) => {
        (state.comments).filter((comment) => {
            if(comment.product_id === id) {
                comment.product_comments.push(data)
            }
        })
    },
    ADD_COMMENT_LIKE: (state, {productId, commentId}) => {
        (state.comments).filter((comment) => {
            if(comment.product_id === productId) {
                comment.product_comments.filter((productComment) => {
                    if(productComment.comment_id ===commentId) {
                        productComment.likes++
                    }
                })
            }
        })
    },
    ADD_COMMENT_DISLIKE: (state, {productId, commentId}) => {
        (state.comments).filter((comment) => {
            if(comment.product_id === productId) {
                comment.product_comments.filter((productComment) => {
                    if(productComment.comment_id ===commentId) {
                        productComment.dislike++
                    }
                })
            }
        })
    },
    ADD_COMMENT_REPLY: (state, {productId, commentId, data}) => {
        (state.comments).filter((comment) => {
            if(comment.product_id === productId) {
                comment.product_comments.filter((productComment) => {
                    if(productComment.comment_id ===commentId) {
                        productComment.replies.push(data)
                    }
                })
            }
        })
    }
}


export const actions = {
    async getComments({ commit }) {
        // const {data: {link}} = await this.$axios.get('/someurl')
        const comments= [
            {
                product_id:1,
                product_comments:[
                    {
                        comment_id:1,
                        context:"empower interactive partnerships",
                        likes:2,
                        dislike:2,
                        replies:[]
                    },
                    {
                        comment_id:2,
                        context:"reinvent user-centric eyeballs",
                        likes:3,
                        dislike:2,
                        replies:[
                            {reply_context: 'yes'},
                        ]
                    },
                    {
                        comment_id:3,
                        context:"facilitate world-class convergence",
                        likes:1,
                        dislike:2,
                        replies:[
                            {reply_context: 'no'},
                            {reply_context: 'no'},
                            {reply_context: 'yes'}
                        ]
                    },
                    {
                        comment_id:4,
                        context:"grow robust deliverables",
                        likes:1,
                        dislike:3,
                        replies:[]
                    }
                ]
            },
            {
                product_id:2,
                product_comments:[
                    {
                        comment_id:1,
                        context:"repurpose rich e-tailers",
                        likes:2,
                        dislike:4,
                        replies:[]
                    },
                    {
                        comment_id:2,
                        context:"redefine efficient action-items",
                        likes:1,
                        dislike:3,
                        replies:[
                            {reply_context: 'no'},
                            {reply_context: 'no'}
                        ]
                    }
                ]
            },
            {
                product_id:3,
                product_comments:[
                    {
                        comment_id:1,
                        context:"deliver killer users",
                        likes:2,
                        dislike:1,
                        replies:[]
                    },
                    {
                        comment_id:2,
                        context:"e-enable real-time bandwidth",
                        likes:1,
                        dislike:2,
                        replies:[]
                    },
                    {
                        comment_id:3,
                        context:"streamline user-centric e-commerce",
                        likes:2,
                        dislike:2,
                        replies:[
                            {reply_context: 'yes'}
                        ]
                    },
                    {
                        comment_id:4,
                        context:"generate impactful functionalities",
                        likes:4,
                        dislike:2,
                        replies:[
                            {reply_context: 'no'},
                            {reply_context: 'yes'},
                            {reply_context: 'no'}
                        ]
                    }
                ]
            },
            {
                product_id:4,
                product_comments:[
                    {
                        comment_id:1,
                        context:"drive viral solutions",
                        likes:2,
                        dislike:2,
                        replies:[
                            {reply_context: 'yes'}
                        ]
                    },
                    {
                        comment_id:2,
                        context:"redefine revolutionary methodologies",
                        likes:1,
                        dislike:3,
                        replies:[
                            {reply_context: 'yes'},
                            {reply_context: 'no'},
                            {reply_context: 'yes'}
                        ]
                    },
                    {
                        comment_id:3,
                        context:"strategize vertical architectures",
                        likes:3,
                        dislike:3,
                        replies:[]
                    },
                    {
                        comment_id:4,
                        context:"optimize visionary systems",
                        likes:1,
                        dislike:3,
                        replies:[]
                    }
                ]
            },
            {
                product_id:5,
                product_comments:[
                    {
                        comment_id:1,
                        context:"seize clicks-and-mortar niches",
                        likes:3,
                        dislike:2,
                        replies:[]
                    },
                    {
                        comment_id:2,
                        context:"mesh visionary infrastructures",
                        likes:4,
                        dislike:1,
                        replies:[
                            {reply_context: 'yes'}
                        ]
                    },
                    {
                        comment_id:3,
                        context:"empower integrated e-tailers",
                        likes:4,
                        dislike:2,
                        replies:[
                            {reply_context: 'no'},
                            {reply_context: 'yes'},
                            {reply_context: 'no'}
                        ]
                    }
                ]
            },
            {
                product_id:6,
                product_comments:[
                    {
                        comment_id:1,
                        context:"seize wireless e-business",
                        likes:1,
                        dislike:2,
                        replies:[
                            {reply_context: 'yes'}
                        ]
                    },
                    {
                        comment_id:2,
                        context:"unleash granular initiatives",
                        likes:3,
                        dislike:2,
                        replies:[]
                    },
                    {
                        comment_id:3,
                        context:"optimize plug-and-play e-commerce",
                        likes:4,
                        dislike:4,
                        replies:[]
                    }
                ]
            },
            {
                product_id:7,
                product_comments:[
                    {
                        comment_id:1,
                        context:"streamline vertical e-commerce",
                        likes:1,
                        dislike:3,
                        replies:[
                            {reply_context: 'yes'}
                        ]
                    }
                ]
            },
            {
                product_id:8,
                product_comments:[
                    {
                        comment_id:1,
                        context:"generate virtual metrics",
                        likes:3,
                        dislike:3,
                        replies:[
                            {reply_context: 'yes'},
                            {reply_context: 'no'},
                            {reply_context: 'yes'}
                        ]
                    }
                ]
            },
            {
                product_id:9,
                product_comments:[]
            },
            {
                product_id:10,
                product_comments:[
                    {
                        comment_id:1,
                        context:"utilize web services",
                        likes:3,
                        dislike:2,
                        replies:[
                            {reply_context: 'yes'},
                            {reply_context: 'yes'},
                            {reply_context: 'no'}
                        ]
                    },
                    {
                        comment_id:2,
                        context:"architect deliverables",
                        likes:1,
                        dislike:2,
                        replies:[]
                    }
                ]
            },
            {
                product_id:11,
                product_comments:[
                    {
                        comment_id:1,
                        context:"maximize collaborative partnerships",
                        likes:4,
                        dislike:4,
                        replies:[
                            {reply_context: 'yes'}
                        ]
                    }
                ]
            },
            {
                product_id:12,
                product_comments:[
                    {
                        comment_id:1,
                        context:"target e-services",
                        likes:2,
                        dislike:1,
                        replies:[
                            {reply_context: 'no'},
                            {reply_context: 'no'},
                            {reply_context: 'yes'}
                        ]
                    },
                    {
                        comment_id:2,
                        context:"morph magnetic content",
                        likes:2,
                        dislike:3,
                        replies:[]
                    },
                    {
                        comment_id:3,
                        context:"transform distributed schemas",
                        likes:1,
                        dislike:1,
                        replies:[
                            {reply_context: 'yes'}
                        ]
                    },
                    {
                        comment_id:4,
                        context:"maximize rich e-commerce",
                        likes:2,
                        dislike:3,
                        replies:[]
                    },
                    {
                        comment_id:5,
                        context:"expedite granular experiences",
                        likes:1,
                        dislike:4,
                        replies:[]
                    }
                ]
            },
            {
                product_id:13,
                product_comments:[]
            },
            {
                product_id:14,
                product_comments:[
                    {
                        comment_id:1,
                        context:"extend vertical markets",
                        likes:3,
                        dislike:3,
                        replies:[]
                    },
                    {
                        comment_id:2,
                        context:"embrace cutting-edge infrastructures",
                        likes:4,
                        dislike:3,
                        replies:[]
                    },
                    {
                        comment_id:3,
                        context:"engage bricks-and-clicks deliverables",
                        likes:3,
                        dislike:3,
                        replies:[
                            {reply_context: 'no'},
                            {reply_context: 'yes'},
                            {reply_context: 'yes'}
                        ]
                    },
                    {
                        comment_id:4,
                        context:"aggregate turn-key platforms",
                        likes:2,
                        dislike:3,
                        replies:[
                            {reply_context: 'yes'}
                        ]
                    }
                ]
            },
            {
                product_id:15,
                product_comments:[
                    {
                        comment_id:1,
                        context:"leverage innovative synergies",
                        likes:1,
                        dislike:4,
                        replies:[
                            {reply_context: 'yes'}
                        ]
                    },
                    {
                        comment_id:2,
                        context:"transition end-to-end experiences",
                        likes:3,
                        dislike:4,
                        replies:[]
                    },
                    {
                        comment_id:3,
                        context:"redefine sticky infomediaries",
                        likes:4,
                        dislike:4,
                        replies:[
                            {reply_context: 'yes'},
                            {reply_context: 'yes'},
                            {reply_context: 'no'}
                        ]
                    },
                    {
                        comment_id:4,
                        context:"maximize dynamic schemas",
                        likes:4,
                        dislike:3,
                        replies:[]
                    }
                ]
            },
            {
                product_id:16,
                product_comments:[]
            },
            {
                product_id:17,
                product_comments:[
                    {
                        comment_id:1,
                        context:"benchmark ubiquitous functionalities",
                        likes:2,
                        dislike:1,
                        replies:[
                            {reply_context: 'yes'}
                        ]
                    },
                    {
                        comment_id:2,
                        context:"whiteboard viral infomediaries",
                        likes:1,
                        dislike:4,
                        replies:[
                            {reply_context: 'yes'},
                            {reply_context: 'no'},
                            {reply_context: 'yes'}
                        ]
                    },
                    {
                        comment_id:3,
                        context:"expedite sticky web-readiness",
                        likes:4,
                        dislike:2,
                        replies:[]
                    }
                ]
            },
            {
                product_id:18,
                product_comments:[]
            },
            {
                product_id:19,
                product_comments:[]
            },
            {
                product_id:20,
                product_comments:[
                    {
                        comment_id:1,
                        context:"synthesize distributed infomediaries",
                        likes:1,
                        dislike:3,
                        replies:[
                            {reply_context: 'yes'},
                            {reply_context: 'yes'},
                            {reply_context: 'yes'}
                        ]
                    },
                    {
                        comment_id:2,
                        context:"brand bleeding-edge action-items",
                        likes:4,
                        dislike:3,
                        replies:[]
                    },
                    {
                        comment_id:3,
                        context:"generate front-end synergies",
                        likes:4,
                        dislike:1,
                        replies:[
                            {reply_context: 'no'}
                        ]
                    },
                    {
                        comment_id:4,
                        context:"synergize visionary metrics",
                        likes:3,
                        dislike:1,
                        replies:[]
                    },
                    {
                        comment_id:5,
                        context:"leverage next-generation content",
                        likes:4,
                        dislike:2,
                        replies:[
                            {reply_context: 'no'},
                            {reply_context: 'no'}
                        ]
                    }
                ]
            },
            {
                product_id:21,
                product_comments:[]
            },
            {
                product_id:22,
                product_comments:[
                    {
                        comment_id:1,
                        context:"productize granular applications",
                        likes:3,
                        dislike:2,
                        replies:[
                            {reply_context: 'no'},
                            {reply_context: 'no'},
                            {reply_context: 'no'}
                        ]
                    }
                ]
            },
            {
                product_id:23,
                product_comments:[
                    {
                        comment_id:1,
                        context:"embrace rich mindshare",
                        likes:2,
                        dislike:3,
                        replies:[
                            {reply_context: 'yes'}
                        ]
                    },
                    {
                        comment_id:2,
                        context:"orchestrate interactive networks",
                        likes:2,
                        dislike:3,
                        replies:[]
                    }
                ]
            },
            {
                product_id:24,
                product_comments:[
                    {
                        comment_id:1,
                        context:"scale bleeding-edge vortals",
                        likes:4,
                        dislike:3,
                        replies:[
                            {reply_context: 'yes'},
                            {reply_context: 'no'}
                        ]
                    },
                ]
            },
            {
                product_id:25,
                product_comments:[
                    {
                        comment_id:1,
                        context:"matrix enterprise experiences",
                        likes:3,
                        dislike:2,
                        replies:[
                            {reply_context: 'no'}
                        ]
                    },
                    {
                        comment_id:2,
                        context:"seize enterprise paradigms",
                        likes:1,
                        dislike:4,
                        replies:[]
                    }
                ]
            },
            {
                product_id:26,
                product_comments:[]
            },
            {
                product_id:27,
                product_comments:[
                    {
                        comment_id:1,
                        context:"harness B2B channels",
                        likes:4,
                        dislike:4,
                        replies:[
                            {reply_context: 'yes'},
                            {reply_context: 'no'},
                            {reply_context: 'no'}
                        ]
                    },
                    {
                        comment_id:2,
                        context:"leverage leading-edge schemas",
                        likes:1,
                        dislike:2,
                        replies:[]
                    }
                ]
            },
            {
                product_id:28,
                product_comments:[
                    {
                        comment_id:1,
                        context:"deploy seamless convergence",
                        likes:4,
                        dislike:2,
                        replies:[
                            {reply_context: 'no'},
                            {reply_context: 'no'},
                            {reply_context: 'yes'}
                        ]
                    }
                ]
            },
            {
                product_id:29,
                product_comments:[]
            },
            {
                product_id:30,
                product_comments:[]
            },
            {
                product_id:31,
                product_comments:[]
            },
            {
                product_id:32,
                product_comments:[]
            },
            {
                product_id:33,
                product_comments:[
                    {
                        comment_id:1,
                        context:"implement extensible e-markets",
                        likes:2,
                        dislike:4,
                        replies:[
                            {reply_context: 'yes'}
                        ]
                    },
                    {
                        comment_id:2,
                        context:"architect value-added users",
                        likes:3,
                        dislike:4,
                        replies:[
                            {reply_context: 'yes'},
                            {reply_context: 'yes'},
                            {reply_context: 'yes'}
                        ]
                    },
                ]
            },
            {
                product_id:34,
                product_comments:[
                    {
                        comment_id:1,
                        context:"grow bricks-and-clicks applications",
                        likes:2,
                        dislike:3,
                        replies:[]
                    },
                    {
                        comment_id:2,
                        context:"generate plug-and-play methodologies",
                        likes:3,
                        dislike:2,
                        replies:[
                            {reply_context: 'yes'}
                        ]
                    },
                ]
            },
            {
                product_id:35,
                product_comments:[]
            },
            {
                product_id:36,
                product_comments:[
                    {
                        comment_id:1,
                        context:"grow frictionless users",
                        likes:4,
                        dislike:3,
                        replies:[]
                    }
                ]
            },
            {
                product_id:37,
                product_comments:[]
            },
            {
                product_id:38,
                product_comments:[
                    {
                        comment_id:1,
                        context:"envisioneer sticky convergence",
                        likes:2,
                        dislike:1,
                        replies:[
                            {reply_context: 'no'}
                        ]
                    }
                ]
            },
            {
                product_id:39,
                product_comments:[
                    {
                        comment_id:1,
                        context:"whiteboard frictionless web-readiness",
                        likes:4,
                        dislike:2,
                        replies:[]
                    },
                    {
                        comment_id:2,
                        context:"streamline sticky communities",
                        likes:4,
                        dislike:4,
                        replies:[
                            {reply_context: 'no'},
                            {reply_context: 'no'},
                            {reply_context: 'no'}
                        ]
                    }
                ]
            },
            {
                product_id:40,
                product_comments:[]
            },
            {
                product_id:41,
                product_comments:[
                    {
                        comment_id:1,
                        context:"strategize enterprise portals",
                        likes:4,
                        dislike:4,
                        replies:[]
                    },
                    {
                        comment_id:2,
                        context:"scale innovative channels",
                        likes:2,
                        dislike:3,
                        replies:[
                            {reply_context: 'yes'}
                        ]
                    }
                ]
            },
            {
                product_id:42,
                product_comments:[]
            },
            {
                product_id:43,
                product_comments:[]
            },
            {
                product_id:44,
                product_comments:[
                    {
                        comment_id:1,
                        context:"mesh B2B users",
                        likes:3,
                        dislike:4,
                        replies:[
                            {reply_context: 'yes'},
                            {reply_context: 'no'}
                        ]
                    },
                    {
                        comment_id:2,
                        context:"leverage open-source technologies",
                        likes:4,
                        dislike:1,
                        replies:[
                            {reply_context: 'no'},
                            {reply_context: 'yes'},
                            {reply_context: 'no'}
                        ]
                    }
                ]
            }
        ]
        commit('setComments',comments)
    }
}