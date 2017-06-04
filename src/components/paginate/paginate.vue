<template>
    <div class="paginate-container">
        <span class="back" @click="back">
            <a :class="selfPage === 1 ? 'disable' : '' ">« Back</a>
        </span>
        <span class="next" @click="next">
            <a :class="selfPage === pageNum ? 'disable' : '' ">Next »</a>
        </span>
        <ul class="paginate-indicate">
            <li v-for="n in pageList"
                :class="selfPage === n ? 'current' : '' "
                @click="pageChange(n)">{{ n }}</li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: ['count', 'showNum', 'limit', 'currentPage'],
        data() {
            return {
                selfPage: 1,
                pageNum: 1,
                selfArr: []
            };
        },
        methods: {
            back() {
                if (this.selfPage > 1) {
                    this.selfPage--;
                }
            },
            next() {
                if (this.selfPage < this.pageNum) {
                    this.selfPage++;
                }
            },
            pageChange(page) {
                this.selfPage = page;
            },
            _currentChunkIndex() {
                let currentChunk = Math.floor((this.selfPage - 1) / this.showNum);
                return currentChunk * this.showNum;
            },
            _generateArr(start, end) {
                let tmp = [];
                for (let i = start; i < end; i++) {
                    tmp[i - start] = i;
                }
                return tmp;
            }
        },
        computed: {
            pageList() {
                let currentIndex = this._currentChunkIndex();
                let firstHalf = this.selfArr.slice(currentIndex, currentIndex + this.showNum);
                let secondHalf = [this.pageNum];
                if (this.selfPage > this.showNum) {
                    firstHalf.unshift('...');
                    firstHalf.unshift(1);
                }
                if (firstHalf.length !== 0 &&
                        firstHalf[firstHalf.length - 1] !== this.pageNum - 1 &&
                        firstHalf[firstHalf.length - 1] !== '...') {
                    firstHalf.push('...');
                }
                return [...firstHalf, ...secondHalf];
            }
        },
        created() {
            this.selfPage = this.currentPage;
            this.pageNum = Math.ceil(this.count / this.limit);
        },
        watch: {
            selfPage(to, from) {
                if (to !== from) {
                    this.$emit('pageChange', to, from);
                }
            },
            currentPage(to, from) {
                this.selfPage = to;
            },
            count(to) {
                this.pageNum = Math.ceil(to / this.limit);
                this.selfArr = this._generateArr(1, this.pageNum);
            }
        }
    };
</script>

<style lang="scss" rel="stylesheet/scss">
    .paginate-container {
        height: 20px;
        line-height: 20px;
        font-weight: 300;
        .disable {
            color: #2f2f2f;
        }
        .back {
            float: left;
        }
        .paginate-indicate {
            width: 100%;
            height: 100%;
            text-align: center;
            li {
                display: inline-block;
                margin: 0 5px;
                cursor: pointer;
            }
            .current {
                color: #e74c3c;
                font-weight: 500;
            }
        }
        .next {
            float: right;
        }
    }
</style>
