const button = document.getElementById('button');

var input = document.getElementById('input');

button.addEventListener('click', function () {

    var inputValue = input.value;

    switch (inputValue.toLowerCase()) {

        case "a1":
            alert("B3 C2");
            break;

        case "a2":
            alert("B4 C3 C1");
            break;

        case "a3":
            alert("B5 C2 C4 B1");
            break;

        case "a4":
            alert("B6 C5 C3 B2");
            break;

        case "a5":
            alert("B7 B3 C6 C2");
            break;

        case "a6":
            alert("B8 B4 C7 C5");
            break;

        case "a7":
            alert("B5 C8 C6");
            break;

        case "a8":
            alert("B6 C7");
            break;



        case "b1":
            alert("A3 C3 D2");
            break;

        case "b2":
            alert("A4 C4 D3 D1");
            break;

        case "b3":
            alert("A5 C5 A1 C1 D4 D2");
            break;

        case "b4":
            alert("A6 C6 A2 C2 D5 D3");
            break;

        case "b5":
            alert("A7 C7 A3 C3 D6 D4");
            break;

        case "b6":
            alert("A8 C8 A4 C4 D7 D5");
            break;

        case "b7":
            alert("D8 D6 A5 C5");
            break;

        case "b8":
            alert("D7 A6 C6");
            break;



        case "c1":
            alert("B3 D3 A2 E2");
            break;

        case "c2":
            alert("B4 D4 A3 E3 A1 E1");
            break;

        case "c3":
            alert("B5 D5 A4 E4 A2 E2 B1 D1");
            break;

        case "c4":
            alert("B6 D6 A5 E5 A3 E3 B2 D2");
            break;

        case "c5":
            alert("B7 D7 A6 E6 A4 E4 B3 D3");
            break;

        case "c6":
            alert("B8 D8 A7 E7 A5 E5 B4 D4");
            break;

        case "c7":
            alert("A8 E8 A6 E6 B5 D5");
            break;

        case "c8":
            alert("A7 E7 B6 D6");
            break;



        case "d1":
            alert("C3 E3 B2 F2");
            break;

        case "d2":
            alert("C4 E4 B3 F3 B1 F1");
            break;

        case "d3":
            alert("C5 E5 B4 F4 B2 F2 C1 E1");
            break;

        case "d4":
            alert("C6 E6 B5 F5 B3 F3 C2 E2");
            break;

        case "d5":
            alert("C7 E7 B6 F6 B4 F4 C3 E3");
            break;

        case "d6":
            alert("C8 E8 B7 F7 B5 F5 C4 E4");
            break;

        case "d7":
            alert("B8 F8 B6 F6 C5 E5");
            break;

        case "d8":
            alert("B7 F7 C6 E6");
            break;



        case "e1":
            alert("D3 F3 C2 G2");
            break;

        case "e2":
            alert("D4 F4 C3 G3 C1 G1");
            break;

        case "e3":
            alert("D5 F5 C4 G4 C2 G2 D1 F1");
            break;

        case "e4":
            alert("D6 F6 C5 G5 C3 G3 D2 F2");
            break;

        case "e5":
            alert("D7 F7 C6 G6 C4 G4 D3 F3");
            break;

        case "e6":
            alert("D8 F8 C7 G7 C5 G5 D4 F4");
            break;

        case "e7":
            alert("C8 G8 C6 G6 D5 F5");
            break;

        case "e8":
            alert("C7 G7 D6 F6");
            break;



        case "f1":
            alert("C3 G3 D2 H2");
            break;

        case "f2":
            alert("C4 G4 D3 H3 D1 H1");
            break;

        case "f3":
            alert("E5 G5 D4 H4 D2 H2 E1 G1");
            break;

        case "f4":
            alert("E6 G6 D5 H5 D3 H3 E2 G2");
            break;

        case "f5":
            alert("E7 G7 D6 H6 D4 H4 E3 G3");
            break;

        case "f6":
            alert("E8 G8 D7 H7 D5 H5 E4 G4");
            break;

        case "f7":
            alert("D8 H8 D6 H6 E5 G5");
            break;

        case "f8":
            alert("D7 H7 E6 G6");
            break;



        case "g1":
            alert("D3 H3 E2");
            break;

        case "g2":
            alert("F4 H4 E3 E1");
            break;

        case "g3":
            alert("F5 H5 E4 E2 F1 H1");
            break;

        case "g4":
            alert("F6 H6 E5 E3 F2 H2");
            break;

        case "g5":
            alert("F7 H7 E6 E4 F3 H3");
            break;

        case "g6":
            alert("F8 H8 E7 E5 F4 H4");
            break;

        case "g7":
            alert("E8 E6 F5 H5");
            break;

        case "g8":
            alert("D7 F6 H6");
            break;



        case "h1":
            alert("E3 F2");
            break;

        case "h2":
            alert("G4 F3 F1");
            break;

        case "h3":
            alert("G5 F4 F2 G1");
            break;

        case "h4":
            alert("G6 F5 F3 G2");
            break;

        case "h5":
            alert("G7 F6 F4 G3");
            break;

        case "h6":
            alert("H8 F7 F5 G4");
            break;

        case "h7":
            alert("F8 F6 G5");
            break;

        case "h8":
            alert("E7 G6");
            break;


    }

})