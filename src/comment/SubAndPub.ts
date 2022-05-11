export class SubAndPub {
    private eventMap: Record<string, ((params: any) => any)[]>
    constructor() {
        this.eventMap = {}
    }
    /**
     * 订阅函数
     * @key 订阅事件名
     * @handler 订阅事件
     */
    on(key: string, handler: (params: any) => any) {
        if (!this.eventMap[key]) {
            this.eventMap[key] = [];
        }
        this.eventMap[key].push(handler);
    }

    /**
     * 发布函数
     * @key 发布事件名
     * @params 发布参数
     */
    emit(key: string, params: any) {
        if (this.eventMap[key]) {
            this.eventMap[key].forEach((handler) => {
                handler(params);
            })
        }
    }
}

const defaultEvent = new SubAndPub();
export default defaultEvent;