declare const _default: {
    /**
     * loadScript - 加载script脚本
     * @param script
     * @return Promise
     */
    loadScript(script: string): Promise<null>;
    /**
     * loadLink - 加载css文件
     * @param link
     * @return Promise
     */
    loadLink(link: string): Promise<null>;
    /**
     * loadRemoteResource - 加载远程所有的脚本和样式资源
     * @param scripts
     * @param links
     * @return Promise
     */
    loadRemoteResource({ scripts, links }: {
        scripts: string[];
        links: string[];
    }): Promise<null>;
};
export default _default;
