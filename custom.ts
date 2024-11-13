
/**
 * カスタムブロック
 */
//% weight=100 color=#0fbc11 icon="/UF076"
//%color=#ff8800 block="かんたん"

namespace custom {
    //%block="左に曲がる"
    export function fo3(): void {
        cuteBot.motors(-30, 30);
        basic.pause(300);
        cuteBot.stopcar()
        basic.pause(500);
    }
}

namespace custom {
    //%block="右に曲がる"
    export function fo7(): void {
        cuteBot.motors(30, -30);
        basic.pause(300);
        cuteBot.stopcar()
        basic.pause(500);
    }
}

namespace custom {
    //%block="後にもどる"
    export function fo1(): void {
        cuteBot.motors(-30, -30);
        basic.pause(500);
        cuteBot.stopcar()
    }
}

namespace custom {
    //%block="前に進む"
    export function foo(): void {
        cuteBot.motors(30, 30);
        basic.pause(500);
        cuteBot.stopcar()
    }
}
namespace custom {
    //%block="1秒止まる"
    export function fo4(): void {
        cuteBot.stopcar()
        basic.pause(1000);
    }
}
namespace custom {
    //%block="2秒止まる"
    export function fo5(): void {
        cuteBot.stopcar()
        basic.pause(2000);
    }
}
namespace custom {
    //%block="止まる"
    export function fo11(): void {
        cuteBot.stopcar();
        
    }
}namespace custom {
    //%block="わずかに止まる"
    export function fo9(): void {
        cuteBot.stopcar();        
        basic.pause(200);
    }
}
namespace custom {
    //%block="すぐにうしろに"
    export function fo10(): void {
        cuteBot.motors(-80, -80);
        basic.pause(50);

    }
}
namespace custom {
    //%block="すぐにすすむ"
    export function fo6(): void {
        cuteBot.motors(30, 30);
        
    }
}
namespace custom {
    //%block="線を調べて前進"
    export function fo8(): void {
        if (cuteBot.tracking(cuteBot.TrackingState.L_R_unline)) {
            cuteBot.motors(20, 20)
        } else {
            cuteBot.motors(-30, -30)
            basic.pause(500)
            cuteBot.motors(30, -30)
            basic.pause(400)
            cuteBot.stopcar()
            basic.pause(500);

        }
    }
}
