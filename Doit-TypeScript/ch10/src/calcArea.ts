import {IShape} from "./IShape";

export const calcArea = (shap: IShape):number => {
    switch (shap.tag){
        case "square": return shap.size * shap.size;
        case "rectangle": return shap.width * shap.height;
        case "circle": return Math.PI * shap.radius * shap.radius;
    }
    return 0;
}