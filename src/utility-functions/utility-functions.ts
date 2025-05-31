export class UtilityFunctions {
    
    public static hash(s: string): string {
        let h = 0;
        for (let i = 0; i < s.length; i++) {
            h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
        }
        return h.toString();
    }
}