first_permutation = [
 
    57, 49, 41, 33, 25, 17, 9,  1,
    59, 51, 43, 35, 27, 19, 11, 3,
    61, 53, 45, 37, 29, 21, 13, 5,
    63, 55, 47, 39, 31, 23, 15, 7,
    56, 48, 40, 32, 24, 16, 8,  0,
    58, 50, 42, 34, 26, 18, 10, 2,
    60, 52, 44, 36, 28, 20, 12, 4,
    62, 54, 46, 38, 30, 22, 14, 6
 
]
final_permutation = [
 
    39, 7, 47, 15, 55, 23, 63, 31,
    38, 6, 46, 14, 54, 22, 62, 30,
    37, 5, 45, 13, 53, 21, 61, 29,
    36, 4, 44, 12, 52, 20, 60, 28,
    35, 3, 43, 11, 51, 19, 59, 27,
    34, 2, 42, 10, 50, 18, 58, 26,
    33, 1, 41, 9,  49, 17, 57, 25,
    32, 0, 40, 8,  48, 16, 56, 24,
 
]
sBoxes = [
 
    [
        14, 4,  13, 1,  2,  15, 11, 8,  3,  10, 6,  12, 5,  9,  0,  7,
        0,  15, 7,  4,  14, 2,  13, 1,  10, 6,  12, 11, 9,  5,  3,  8,
        4,  1,  14, 8,  13, 6,  2,  11, 15, 12, 9,  7,  3,  10, 5,  0,
        15, 12, 8,  2,  4,  9,  1,  7,  5,  11, 3,  14, 10, 0,  6,  13
    ],
    [
        15, 1,  8,  14, 6,  11, 3,  4,  9,  7,  2,  13, 12, 0,  5,  10,
        3,  13, 4,  7,  15, 2,  8,  14, 12, 0,  1,  10, 6,  9,  11, 5,
        0,  14, 7,  11, 10, 4,  13, 1,  5,  8,  12, 6,  9,  3,  2,  15,
        13, 8,  10, 1,  3,  15, 4,  2,  11, 6,  7,  12, 0,  5,  14, 9
    ],
    [
        10, 0,  9,  14, 6,  3,  15, 5,  1,  13, 12, 7,  11, 4,  2,  8,
        13, 7,  0,  9,  3,  4,  6,  10, 2,  8,  5,  14, 12, 11, 15, 1,
        13, 6,  4,  9,  8,  15, 3,  0,  11, 1,  2,  12, 5,  10, 14, 7,
        1,  10, 13, 0,  6,  9,  8,  7,  4,  15, 14, 3,  11, 5,  2,  12
    ],
    [
        7,  13, 14, 3,  0,  6,  9,  10, 1,  2,  8,  5,  11, 12, 4,  15,
        13, 8,  11, 5,  6,  15, 0,  3,  4,  7,  2,  12, 1,  10, 14, 9,
        10, 6,  9,  0,  12, 11, 7,  13, 15, 1,  3,  14, 5,  2,  8,  4,
        3,  15, 0,  6,  10, 1,  13, 8,  9,  4,  5,  11, 12, 7,  2,  14
    ],
    [
        2,  12, 4,  1,  7,  10, 11, 6,  8,  5,  3,  15, 13, 0,  14, 9,
        14, 11, 2,  12, 4,  7,  13, 1,  5,  0,  15, 10, 3,  9,  8,  6,
        4,  2,  1,  11, 10, 13, 7,  8,  15, 9,  12, 5,  6,  3,  0,  14,
        11, 8,  12, 7,  1,  14, 2,  13, 6,  15, 0,  9,  10, 4,  5,  3
    ],
    [
        12, 1,  10, 15, 9,  2,  6,  8,  0,  13, 3,  4,  14, 7,  5,  11,
        10, 15, 4,  2,  7,  12, 9,  5,  6,  1,  13, 14, 0,  11, 3,  8,
        9,  14, 15, 5,  2,  8,  12, 3,  7,  0,  4,  10, 1,  13, 11, 6,
        4,  3,  2,  12, 9,  5,  15, 10, 11, 14, 1,  7,  6,  0,  8,  13
    ],
    [
        4,  11,  2, 14, 15, 0,  8,  13, 3,  12, 9,  7,  5,  10, 6,  1,
        13, 0,  11, 7,  4,  9,  1,  10, 14, 3,  5,  12, 2,  15, 8,  6,
        1,  4,  11, 13, 12, 3,  7,  14, 10, 15, 6,  8,  0,  5,  9,  2,
        6,  11, 13, 8,  1,  4,  10, 7,  9,  5,  0,  15, 14, 2,  3,  12
    ],
    [
        13, 2,  8,  4,  6,  15, 11, 1,  10, 9,  3,  14, 5,  0,  12, 7,
        1,  15, 13, 8,  10, 3,  7,  4,  12, 5,  6,  11, 0,  14, 9,  2,
        7,  11, 4,  1,  9,  12, 14, 2,  0,  6,  10, 13, 15, 3,  5,  8,
        2,  1,  14, 7,  4,  10, 8,  13, 15, 12, 9,  0,  3,  5,  6,  11
    ]
 
]
expansion = [
 
    31, 0,  1,  2,  3,  4,
    3,  4,  5,  6,  7,  8,
    7,  8,  9,  10, 11, 12,
    11, 12, 13, 14, 15, 16,
    15, 16, 17, 18, 19, 20,
    19, 20, 21, 22, 23, 24,
    23, 24, 25, 26, 27, 28,
    27, 28, 29, 30, 31, 0
 
]
permutation = [
 
    15, 6,  19, 20, 28, 11, 27, 16,
    0,  14, 22, 25, 4,  17, 30, 9,
    1,  7,  23, 13, 31, 26, 2,  8,
    18, 12, 29, 5,  21, 10, 3,  24
 
]
permutation_for_key_1 = [
 
    56, 48, 40, 32, 24, 16, 8,
    0,  57, 49, 41, 33, 25, 17,
    9,  1,  58, 50, 42, 34, 26,
    18, 10, 2,  59, 51, 43, 35,
    62, 54, 46, 38, 30, 22, 14,
    6,  61, 53, 45, 37, 29, 21,
    13, 5,  60, 52, 44, 36, 28,
    20, 12, 4,  27, 19, 11, 3
 
]
permutation_for_key_2 = [
 
    13, 16, 10, 23, 0,  4,
    2,  27, 14, 5,  20, 9,
    22, 18, 11, 3,  25, 7,
    15, 6,  26, 19, 12, 1,
    40, 51, 30, 36, 46, 54,
    29, 39, 50, 44, 32, 47,
    43, 48, 38, 55, 33, 52,
    45, 41, 49, 35, 28, 31
 
]
sdvig_dlya_klucha = [
 
    1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1
 
]
function sliceMess(string) {
    const hexString = Array.from(string).map(char =>
        char.charCodeAt(0).toString(16)  
    ).join('');
    
    const blocks = [];
    for (let i = 0; i < hexString.length; i += 16) {
        blocks.push(hexString.slice(i, i + 16).padEnd(16, '0')); 
    }

    return blocks; 
}
function formatKey(userInput, desiredLength = 16) {
   
    const hexKey = Array.from(userInput)
        .map(char => char.charCodeAt(0).toString(16)) 
        .join('');

    if (hexKey.length < desiredLength) {
        return hexKey.padEnd(desiredLength, '0');
    }

    return hexKey.slice(0, desiredLength);
}
function toBin(input) {
    if (typeof input === 'string') {
        return input.split('').map(char =>
            parseInt(char, 16).toString(2).padStart(4, '0') 
        ).join(''); 
    }

    if (Array.isArray(input)) {
        return input.map(s =>
            s.split('').map(char =>
                parseInt(char, 16).toString(2).padStart(4, '0')
            ).join('') 
        );
    }
}
function permute(block, box) {
   
    return box.map(index => block[index]).join('');
}
function XOR(arg_1, arg_2) {

    return arg_1.split('').map((bit, index) => 
        (parseInt(bit) ^ parseInt(arg_2[index])).toString()
    ).join('');
}
function rotateLeft(block, shifts) {
   
    const num = parseInt(block, 2);

    const rotated = ((num << shifts) & 0x0fffffff) | (num >>> (28 - shifts));

    
    return rotated.toString(2).padStart(28, '0');
}
function concatenate(args) {

    return args.reduce((acc, curr) => acc.concat(curr), []);
}
function keyGen(block1, block2) {
    const keys = []; 

    for (let i = 0; i < sdvig_dlya_klucha.length; i++) {
        block1 = rotateLeft(block1, sdvig_dlya_klucha[i]); 
        block2 = rotateLeft(block2, sdvig_dlya_klucha[i]); 
       
        keys.push(permute(block1 + block2, permutation_for_key_2));
    }

    return keys;
}
function f(block, key) {
    const final = [];

  
    const expandedBlock = permute(block, expansion);
    const xoredBlock = XOR(expandedBlock, key);
    const parts = xoredBlock.match(/.{6}/g);

    parts.forEach((part, j) => {

        const tempBox = [
            sBoxes[j].slice(0, 16),
            sBoxes[j].slice(16, 32),
            sBoxes[j].slice(32, 48),
            sBoxes[j].slice(48, 64),
        ];

      
        const row = parseInt(part[0] + part[5], 2);
        const col = parseInt(part.slice(1, 5), 2);

  
        const sBoxValue = tempBox[row][col];
        final.push(sBoxValue.toString(2).padStart(4, '0'));
    });

    return permute(final.join(''), permutation);
}
function des(block, keyArray) {
    let left = block.slice(0, block.length / 2);
    let right = block.slice(block.length / 2);   

  
    for (let i = 0; i < 16; i++) {
        const temp = right;                     
        right = XOR(f(right, keyArray[i]), left); 
        left = temp;                             
    }

    const result = permute(right + left, final_permutation); 
    return result.match(/.{8}/g);
}
function encrypt(mess, key) {
    const encryptedList = [];
    const binKey = toBin(key);

    sliceMess(mess).forEach(block => {
        const binMess = toBin(block);
        const permutedKey = permute(binKey, permutation_for_key_1);
        const permutedBlock = permute(binMess, first_permutation);

        const keyList = keyGen(
            permutedKey.slice(0, permutedKey.length / 2),
            permutedKey.slice(permutedKey.length / 2)
        );

        const encryptedBlock = des(permutedBlock, keyList);
        encryptedList.push(
            encryptedBlock.map(bin => parseInt(bin, 2).toString(16).toUpperCase().padStart(2, '0')).join('')
        );
    });

    return encryptedList.join('');
}
function decrypt(mess, key) {
    const tempList = [];
    const binKey = toBin(key);

    mess.match(/.{1,16}/g).forEach(block => {
        const binMess = toBin(block);
        const permutedKey = permute(binKey, permutation_for_key_1);
        const permutedBlock = permute(binMess, first_permutation);

        const keyList = keyGen(
            permutedKey.slice(0, permutedKey.length / 2),
            permutedKey.slice(permutedKey.length / 2)
        );

        const decryptedBlock = des(permutedBlock, [...keyList].reverse());
        tempList.push(
            decryptedBlock.map(bin => parseInt(bin, 2).toString(16).toUpperCase().padStart(2, '0')).join('')
        );
    });

    return tempList.map(hexBlock =>
        hexBlock.match(/.{2}/g)
            .filter(hex => parseInt(hex, 16) !== 0)
            .map(hex => String.fromCharCode(parseInt(hex, 16)))
            .join('')
    ).join('');
}