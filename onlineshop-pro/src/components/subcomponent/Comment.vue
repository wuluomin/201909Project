<template>
    <div id="comment-box">
        <h3>发表评论</h3>
        <hr>
        <textarea name="comment" id="comment" cols="30" rows="10" placeholder="你想说点啥" maxlength="50"></textarea>
        <mt-button size="large" type="primary" id="setComment">确认发表</mt-button>
        <!-- 评论区 -->
        <div id="comment-content">
            @1&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2011-12-23
        </div>
        <!-- 加载更多 -->
        <mt-button type="danger" size="large" id="moreComents" plain>加载更多</mt-button>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
#comment-box{
    
    overflow: hidden;

    textarea{
        margin-bottom: 5px;
        height: 100px;
    }
    #comment{
        padding-left: 2px;
    }
    // 为啥有时候外层用了 overflow: hidden; 也没用？还是会合并margin
    #setComment{
        margin-bottom: 5px;
    }
    #comment-content{
        background-color: #ccc;
        margin: 5px 0;
    }
    #moreComents{
        margin-top: 10px;
    }
}
</style>