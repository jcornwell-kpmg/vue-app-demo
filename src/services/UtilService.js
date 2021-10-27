class UtilService {
    hasLength(input) {
        return typeof input === "string" && input.length > 0;
    }
}

export default new UtilService();