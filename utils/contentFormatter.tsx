function contentFormatter(contentToFormat: string) {
    return contentToFormat.replace("className=", "class=");
}

export default contentFormatter
