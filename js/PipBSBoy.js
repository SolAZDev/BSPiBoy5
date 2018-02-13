/// VARIABLE ZONE ///
var PBJSon = "https://raw.githubusercontent.com/SolAZDev/BSPiBoy5/master/js/PipBoyDemo.json";
var DefainedJSON = "";

$(document).ready(function () {
    StartUp(1, 1);
});

function StartUp(Main, Sub) {
    switch (Main) {
        default:
        case 1:    
            $("#StatScreen").show();
            $("#InvScreen").hide();
            $("#DataScreen").hide();
            $("MapScreen").hide();
            $("#RadioScreen").hide();
            switch (Sub) {
                default:
                case 1:
                    $("#StatusScreen").show();
                    $("#SpecialScreen").hide();
                    $("#PerkScreen").hide();
                    break;
                case 2:
                    $("#StatusScreen").hide();
                    $("#SpecialScreen").show();
                    $("#PerkScreen").hide();
                    break;
                case 3:
                    $("#StatusScreen").hide();
                    $("#SpecialScreen").hide();
                    $("#PerkScreen").show();
                    break;
            }
            break;
        case 2:
            $("#StatScreen").show();
            $("#InvScreen").hide();
            $("#DataScreen").hide();
            $("MapScreen").hide();
            $("#RadioScreen").hide();
            switch (Sub) {
                default:
                case 1:
                    $("#WeaponScreen").show();
                    $("#ApparelScreen").hide();
                    $("#AidScreen").hide();
                    $("#MiscScreen").hide();
                    $("#JunkScreen").hide();
                    break;
                case 2:
                    $("#WeaponScreen").hide();
                    $("#ApparelScreen").show();
                    $("#AidScreen").hide();
                    $("#MiscScreen").hide();
                    $("#JunkScreen").hide();
                    break;    
                case 3:
                    $("#WeaponScreen").hide();
                    $("#ApparelScreen").hide();
                    $("#AidScreen").show();
                    $("#MiscScreen").hide();
                    $("#JunkScreen").hide();
                    break;    
                case 4:
                    $("#WeaponScreen").hide();
                    $("#ApparelScreen").hide();
                    $("#AidScreen").hide();
                    $("#MiscScreen").show();
                    $("#JunkScreen").hide();
                    break;    
                case 5:
                    $("#WeaponScreen").hide();
                    $("#ApparelScreen").hide();
                    $("#AidScreen").hide();
                    $("#MiscScreen").hide();
                    $("#JunkScreen").show();
                    break;
            }
            break;
        case 3:
            $("#StatScreen").hide();
            $("#InvScreen").hide();
            $("#DataScreen").show();
            $("MapScreen").hide();
            $("#RadioScreen").hide();
            switch (Sub) {
                default:
                case 1:
                    $("#CalendarScreen").show();
                    $("#ContactsScreen").hide();
                    $("#AboutScreen").hide();
                    break;
                case 1:
                    $("#CalendarScreen").hide();
                    $("#ContactsScreen").show();
                    $("#AboutScreen").hide();
                    break;
                case 2:
                    $("#CalendarScreen").hide();
                    $("#ContactsScreen").hide();
                    $("#AboutScreen").show();
                    break;
            }
            break;
        case 4:
            $("#StatScreen").hide();
            $("#InvScreen").hide();
            $("#DataScreen").hide();
            $("MapScreen").show();
            $("#RadioScreen").hide();
            break;
        case 5:
            $("#StatScreen").hide();
            $("#InvScreen").hide();
            $("#DataScreen").hide();
            $("MapScreen").hide();
            $("#RadioScreen").show();
            break;
    }
}

function TestJSON() {
    $.getJSON(PBJSon, function (data) {
        $.each(data.PIPBOY.SPECIAL, function (key, val) {
            console.log(val.name + " " + val.value);
        });
        $.each(data.PIPBOY.PERKS, function (key, val) {
            console.log(val.name + " " + val.value);
        });
        $.each(data.PIPBOY.WEAPONS, function (key, val) {
            console.log(val.name + " " + val.value);
        });
        $.each(data.PIPBOY.APPAREL, function (key, val) {
            console.log(val.name + " " + val.value);
        });
        $.each(data.PIPBOY.AID, function (key, val) {
            console.log(val.name + " " + val.value);
        });
        $.each(data.PIPBOY.MISC, function (key, val) {
            console.log(val.name + " " + val.value);
        });
        $.each(data.PIPBOY.JUNK, function (key, val) {
            console.log(val.name + " " + val.value);
        });
        $.each(data.PIPBOY.RADIO, function (key, val) {
            console.log(val.name + " " + val.url);
        });
    });
}