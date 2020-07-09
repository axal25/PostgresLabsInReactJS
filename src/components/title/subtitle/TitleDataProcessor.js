class TitleDataProcessor {
    static getTitle(object, objectName) {
        return object.title || (object.number && objectName)
            ? `${this.getTitleNumber(object, objectName)}${this.getTitleText(object)}`
            : undefined;
    }

    static getTitleText(object) {
        return object.title ? object.title : '';
    }

    static getTitleNumber(object, objectName) {
        return object.number ? `${objectName} ${object.number}. ` : '';
    }
}

export default TitleDataProcessor;