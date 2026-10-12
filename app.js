// ============================================================
// PERÍODOS PADRÃO (2023 a 2027 = 60 meses)
// ============================================================
const PERIODOS_PADRAO = [
  "janeiro, 2023", "fevereiro, 2023", "março, 2023", "abril, 2023",
  "maio, 2023", "junho, 2023", "julho, 2023", "agosto, 2023",
  "setembro, 2023", "outubro, 2023", "novembro, 2023", "dezembro, 2023",
  "janeiro, 2024", "fevereiro, 2024", "março, 2024", "abril, 2024",
  "maio, 2024", "junho, 2024", "julho, 2024", "agosto, 2024",
  "setembro, 2024", "outubro, 2024", "novembro, 2024", "dezembro, 2024",
  "janeiro, 2025", "fevereiro, 2025", "março, 2025", "abril, 2025",
  "maio, 2025", "junho, 2025", "julho, 2025", "agosto, 2025",
  "setembro, 2025", "outubro, 2025", "novembro, 2025", "dezembro, 2025",
  "janeiro, 2026", "fevereiro, 2026", "março, 2026", "abril, 2026",
  "maio, 2026", "junho, 2026", "julho, 2026", "agosto, 2026",
  "setembro, 2026", "outubro, 2026", "novembro, 2026", "dezembro, 2026",
  "janeiro, 2027", "fevereiro, 2027", "março, 2027", "abril, 2027",
  "maio, 2027", "junho, 2027", "julho, 2027", "agosto, 2027",
  "setembro, 2027", "outubro, 2027", "novembro, 2027", "dezembro, 2027",
];

let PERIODOS = [...PERIODOS_PADRAO];

const MESES = [
  "janeiro", "fevereiro", "março", "abril", "maio", "junho",
  "julho", "agosto", "setembro", "outubro", "novembro", "dezembro",
];

// ============================================================
// DADOS EMBUTIDOS
// ============================================================
const DADOS_EMBUTIDOS = {

  "TOTAL RECEBIDO NO MES ANTERIOR": [
    -1422.49, -432.15, -41.18, 8513.43, 3197.77, 4030.01,
    4167.69, 687.27, 2572.98, 4154.96, 2954.20, 12235.14,
    2346.00, 4159.03, -16922.31, 2964.30, -15.23, -17076.97,
    12573.65, 4794.33, -963.39, 805.49, 3594.47, -5554.94,
    -51266.72, -4256.83, 7105.95, 31924.78, 29126.12, 2623.81,
    4558.77, 4427.52, 1314.82, -163.32, -8908.67, 1687.49,
    -3810.29, 12037.79, 6661.62, 0.00, -2988.29, -2818.74,
    -3672.85, 3412.35, -6585.08, 77506.27, 84091.35, -77506.27,
    null, null, null, null, null, null, null, null, null, null, null, null,
  ],

  "TOTAL RECEBIDO NESTE MES": [
    22389.73, -1422.49, -432.15, -41.18, 8513.43, 3197.77,
    4030.01, 4167.69, 687.27, 2572.98, 4154.96, 2954.20,
    12235.14, 2346.00, 4159.03, -16922.31, 2964.30, -15.23,
    -17076.97, 12573.65, 4794.33, -963.39, 805.49, 3594.47,
    -5554.94, -51266.72, -4256.83, 7105.95, 31924.78, 29126.12,
    2623.81, 4558.77, 4427.52, 1314.82, -163.32, 8908.67,
    -1687.49, 3810.29, -12037.79, -6661.62, 0.00, 2988.29,
    2818.74, 3672.85, -3412.35, 6585.08, -77506.27, -84091.35,
    null, null, null, null, null, null, null, null, null, null, null, null,
  ],

  "TOTAL DO PATRIMONIO": [
    22389.73, 20967.24, 20535.08, 20493.90, 29007.33, 32205.10,
    36235.11, 40402.80, 41090.07, 43663.05, 47818.01, 50772.21,
    63007.35, 65353.35, 69512.38, 52590.07, 55554.37, 55539.14,
    38462.17, 51035.82, 55830.15, 54866.76, 55672.25, 59266.72,
    53711.78, 2445.06, -1811.77, 5294.18, 37218.96, 66345.08,
    68968.89, 73527.66, 77955.18, 79269.99, 79106.68, 88015.35,
    86327.86, 90138.15, 78100.36, 71438.74, 71438.74, 74427.03,
    77245.77, 80918.62, 77506.27, 84091.35, 6585.08, -77506.27,
    null, null, null, null, null, null, null, null, null, null, null, null,
  ],

  "SALARIO PROVENTOS": [
    4855.82, 1624.74, 3571.63, 3584.43, 3769.62, 4748.03,
    3786.80, 7931.89, 1837.16, 2073.39, 5879.72, 4097.81,
    3844.07, 3719.53, 3728.61, 3879.65, 3697.44, 4256.00,
    3796.93, 3992.73, 3800.47, 3961.89, 3856.77, 9431.99,
    3029.23, 3048.78, 3806.44, 3994.83, 4005.61, 3829.13,
    3445.53, 4160.57, 3978.98, 4175.89, 6421.39, 4066.95,
    10042.62, 3724.39, 551.73, 4265.55, 4460.42, 5223.95,
    4268.52, 4740.65, 4467.25, 4634.01, 4297.32, 4303.02,
    null, null, null, null, null, null, null, null, null, null, null, null,
  ],

  "BANCO DO BRASIL - BANCO POUPANCA": [
    3477.91, 2113.85, 1660.91, 1598.94, 3528.86, 6168.25,
    9618.58, 10011.69, 11000.00, 12041.05, 11974.82, 13724.98,
    15664.00, 17053.25, 20093.23, 1911.10, 4708.54, 4256.16,
    7727.86, 1139.17, 4300.00, 2925.76, 4369.70, 9378.17,
    4939.29, -4438.88, -9378.17, -4939.29, 4438.88, 13259.01,
    16000.00, 18054.39, 19093.85, 20477.75, 21028.31, 24402.20,
    10819.72, 13513.20, 2772.53, 1000.00, 1000.00, 2000.00,
    11486.10, 13507.48, 7814.25, 11396.65, 3582.40, -7814.25,
    null, null, null, null, null, null, null, null, null, null, null, null,
  ],

  "BANCO DO BRASIL - BRASILPREV": [
    1427.92, 1448.71, 1469.49, 1490.28, 8073.79, 8135.89,
    8338.04, 8716.90, 8854.65, 9031.97, 9245.13, 9521.76,
    9706.87, 9876.47, 10057.61, 10196.07, 10366.09, 10405.17,
    10575.52, 10772.79, 11003.25, 11183.24, 11386.40, 11538.34,
    11896.18, 357.84, -11538.34, -11896.18, -357.84, 12932.49,
    13335.02, 13636.61, 13859.33, 13943.56, 14224.33, 14505.04,
    14908.32, 15107.55, 15511.91, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    null, null, null, null, null, null, null, null, null, null, null, null,
  ],

  "BANCO DO BRASIL - CORRENTE": [
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    611.52, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 394.04, 1000.00,
    0.00, 1000.00, 566.58, 1000.00, 1000.00, 0.00,
    -1000.00, -1000.00, 0.00, 1000.00, 736.49, 0.00,
    35.55, 714.92, 1000.00, 329.30, 1000.00, 246.04,
    null, null, null, null, null, null, null, null, null, null, null, null,
  ],

  "BANCO DO BRASIL - AGENDADO": [
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, -720.26, -355.03,
    0.00, -355.03, -262.63, -262.63, -262.63, 0.00,
    262.63, 262.63, 0.00, -262.63, 0.00, 0.00,
    0.00, 0.00, -171.11, 0.00, 0.00, 0.00,
    null, null, null, null, null, null, null, null, null, null, null, null,
  ],

  "RICO - RENDA VARIAVEL - FIIs": [
    446.57, 771.98, 645.31, 2187.83, 2265.78, 4518.03,
    4514.50, 4522.40, 4525.29, 4482.55, 4359.90, 4475.60,
    4504.64, 4561.61, 4374.42, 4330.89, 4128.53, 4627.06,
    498.53, -4128.53, -4627.06, -498.53, 5153.68, 5336.02,
    5551.04, 5781.69, 5899.04, 5997.16, 6214.86, 6503.23,
    6786.91, 7400.08, 15918.44, 15918.44, 16910.30, 17500.46,
    18145.91, 19896.74, 21476.96, 1580.22, -19896.74,
    null, null, null, null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null, null, null, null,
  ],

  "RICO - RENDA VARIAVEL - ACOES": [
    403.84, 403.84, 403.84, 0, 403.84, 403.84,
    423.08, 687.15, 658.99, 1059.49, 907.31, 1228.33,
    1354.40, 1317.78, 1316.25, 1285.23, 1340.44, 1347.88,
    1269.08, 1306.61, 1328.08, 1425.15, 1421.01, 1409.05,
    1391.52, 809.16, -582.36, -1391.52, -809.16, 582.36,
    802.52, 773.09, 1411.03, 2171.83, 2216.20, 2840.97,
    4017.11, 5160.43, 6179.70, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    null, null, null, null, null, null, null, null, null, null, null, null,
  ],

  "RICO - PROVENTOS": [
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    5.33, 6.56, 4.40, 7.91, 14.68, 14.12,
    35.43, 45.12, 17.53, 25.37, 10.58, 24.50,
    36.45, 25.66, 25.61, 15.83, -9.78, -25.61,
    -15.83, 9.78, 39.49, 9.08, 32.50, 32.78,
    27.57, 4.14, 21.55, 93.87, 50.26, 49.39,
    64.07, 64.07, 67.06, 5.55, 77.63, 79.77,
    null, null, null, null, null, null, null, null, null, null, null, null,
  ],

  "RICO - INVESTIMENTO": [
    2.63, 2.92, 1.04, 3.40, 7.65, 13.56,
    3.73, 31.20, 4.09, 2.25, 32.39, 19.84,
    3.29, 3.50, 1.24, 19.06, 19.33, 4.60,
    -14.73, -19.33, -4.60, 14.73, 15.94, 47.84,
    29.04, 66.07, 36.36, 116.90, 14.56, 46.38,
    20.65, 4088.40, 120.28, 120.28, 1063.36, 162.57,
    903.88, 1369.85, 274.93, -1094.92, -1369.85,
    null, null, null, null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null,
  ],

  "RICO - RENDA VARIAVEL - POS-FIXADO": [
    571.28, 825.45, 1109.69, 1255.81, 1272.41, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    204.77, 403.03, 173.92, 351.56, 356.22, 722.57,
    912.82, 923.09, 1514.04, 1514.04, 1716.74, 1752.66,
    1757.30, 2169.23, 2396.75, 227.52, -2169.23,
    null, null, null, null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null,
  ],

  "RICO - RENDA VARIAVEL - INFLACAO": [
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    231.36, 338.30, 406.64, 763.62, 882.92, 1108.67,
    1136.59, 1136.59, 1134.95, 1151.55, 1156.12, 1172.06,
    null, null, null, null, null, null, null, null, null, null, null, null,
  ],

  "RICO - RENDA VARIAVEL - DIGITAL": [
    0.00, 2.69, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 1000.00, 0.00, 1000.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    null, null, null, null, null, null, null, null, null, null, null, null,
  ],

  "RICO - LANCAMENTOS FUTUROS": [
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, -2224.56, 0.00, 0.00,
    null, null, null, null, null, null, null, null, null, null, null, null,
  ],

  "RICO - RENDA VARIAVEL - PREFIXADO": [
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, 50.99,
    null, null, null, null, null, null, null, null, null, null, null, null,
  ],

  "PIC PAY - SALDO EM CONTA": [
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    27.62, 193.25, 0.00, 0.00, 0.00, 0.00,
    79.90, 0.00, 26.03, 22.33, 0.00, 24.50,
    4.52, 0.00, 0.00, 107.34, 107.34, 0.00,
    -107.34, -107.34, 94.82, 0.00, 104.74, 0.00,
    0.00, 67.49, 0.00, 39.00, 21.85, 2.14,
    0.00, 0.00, 0.00, 0.00, 0.00, 9.63,
    null, null, null, null, null, null, null, null, null, null, null, null,
  ],

  "PIC PAY - RENDA FIXA - CDB": [
    509.64, 509.64, 509.64, 509.64, 509.64, 577.88,
    413.56, 3.00, 63.89, 770.84, 2000.55, 300.00,
    700.66, 400.72, 550.28, 900.78, 852.04, 728.90,
    9.20, 14.06, 485.44, 1066.79, 554.24, 1091.05,
    613.19, -477.86, -1091.05, -613.19, 477.86, 0.30,
    772.84, 1301.34, 2196.86, 2001.52, 926.04, 1998.21,
    1355.07, 581.44, 1251.58, 4302.43, 4302.43, 3813.03,
    886.87, 0.00, 150.24, 363.48, 213.24, -150.24,
    null, null, null, null, null, null, null, null, null, null, null, null,
  ],

  "PIC PAY - RENDA FIXA - CORRENTE": [
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    0.27, 0.00, 0.00, 0.00, 0.00, 218.52,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    null, null, null, null, null, null, null, null, null, null, null, null,
  ],

  "PIC PAY - RENDA FIXA - CRIPTO": [
    0.57, 0.56, 0.56, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    null, null, null, null, null, null, null, null, null, null, null, null,
  ],

  "PIC PAY - RESERVA DE EMERGENCIA": [
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 1164.49, 1164.49, 1000.13, -164.36,
    null, null, null, null, null, null, null, null, null, null, null, null,
  ],

  "PIC PAY - PLANEJAMENTO FINACEIRO": [
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 200.04, 200.04, 0.00,
    null, null, null, null, null, null, null, null, null, null, null, null,
  ],

  "PIC PAY – MIKAELA": [
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 149.01,
    null, null, null, null, null, null, null, null, null, null, null, null,
  ],

  "PIC PAY – GABRIEL": [
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 1108.48, 0.00,
    -1108.48, -1108.48, 0.00, 1108.48, 1108.48, 0.00,
    null, null, null, null, null, null, null, null, null, null, null, null,
  ],

  "INTER - BANCO CONTA DIGITAL": [
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    0.00, 0.00, 0.44, 0.00, 0.00, 0.26,
    5.41, 0.33, 0.33, 0.00, 0.45, 0.30,
    0.00, 0.39, 0.00, 0.33, 0.33, 0.00,
    -0.33, -0.33, 0.00, 0.36, 0.37, 0.00,
    0.39, 1.08, 0.72, 0.91, 0.01, 0.00,
    null, null, null, null, null, null, null, null, null, null, null, null,
  ],

  "INTER - RENDA FIXA": [
    1.00, 1.00, 1.00, 1.00, 1.00, 18.80,
    79.30, 513.63, 77.15, 91.34, 195.33, 1112.13,
    1063.90, 1083.06, 1089.69, 1115.22, 1119.81, 1106.76,
    1116.19, 1128.29, 1147.47, 1161.01, 1178.63, 1193.05,
    23.65, -1169.40, -1193.05, -23.65, 1169.40, 1.07,
    34.36, 138.73, 141.19, 157.32, 175.16, 185.27,
    3.30, 137.12, 187.58, 21.35, 21.35, 3.05,
    3.11, 2.07, 13.59, 27.32, 13.73, -13.59,
    null, null, null, null, null, null, null, null, null, null, null, null,
  ],

  "INTER - RENDA VARIAVEL": [
    281.09, 281.09, 281.09, 281.09, 281.09, 654.27,
    811.27, 209.11, 419.97, 427.91, 429.91, 486.57,
    633.39, 754.57, 754.24, 749.66, 742.62, 749.21,
    756.06, 755.55, 751.02, 725.79, 703.03, 660.12,
    1860.40, 1200.28, -660.12, -1860.40, -1200.28, 1613.46,
    1643.96, 1554.80, 1596.50, 1577.99, 1567.73, 1567.73,
    1767.10, 1815.79, 1844.17, 1901.21, 1901.21, 1876.66,
    1885.88, 1859.60, 1838.50, 1931.31, 92.81, -1838.50,
    null, null, null, null, null, null, null, null, null, null, null, null,
  ],

  "INTER - RENDA VARIAVEL - FIIS": [
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    770.61, 0.00, null, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    null, null, null, null, null, null, null, null, null, null, null, null,
  ],

  "INTER - RENDA VARIAVEL - FIAGRO": [
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    55.86, 0.00, null, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    null, null, null, null, null, null, null, null, null, null, null, null,
  ],

  "INTER - TESOURO DIRETO": [
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    275.17, 137.64, 138.77, 139.60, 141.50, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    null, null, null, null, null, null, null, null, null, null, null, null,
  ],

  "INTER - BANCO FUNDOS": [
    1.00, 1.00, 1.00, 1.00, 1.00, 18.82,
    79.10, 112.37, 0.00, null, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    null, null, null, null, null, null, null, null, null, null, null, null,
  ],

  "BANCO CAIXA POUPANÇA Repubica 4156": [
    9.00, 9.00, 9.00, 9.00, 9.00, 9.00,
    9.00, 51.77, 63.22, 163.54, 300.61, 1302.60,
    1310.19, 1972.00, 2222.30, 2241.26, 2247.78, 2260.74,
    2167.18, 2167.18, 134.27, 135.04, 135.81, 136.58,
    137.36, 0.78, -136.58, -137.36, -0.78, 141.79,
    142.74, 143.70, 144.67, 145.64, 145.80, 145.80,
    148.58, 149.58, 150.50, 152.48, 152.48, 153.51,
    100.00, 100.67, 100.84, 101.98, 1.14, -100.84,
    null, null, null, null, null, null, null, null, null, null, null, null,
  ],

  "BANCO CAIXA FGTS": [
    16199.11, 16199.11, 16199.11, 16199.11, 16199.11, 16199.11,
    16199.11, 17304.18, 17725.68, 18124.42, 18478.98, 19020.43,
    19492.77, 19848.23, 20188.45, 20577.94, 20867.20, 21188.78,
    321.58, 16000.00, 19783.07, 20137.94, 20500.41, 19755.57,
    20905.71, 1150.14, 21699.38, 22100.25, 22513.88, 22908.20,
    19653.68, 20074.87, 20474.98, 20474.98, 20901.38, 22087.86,
    22401.23, 22828.23, 23348.63, 24184.98, 24184.98, 24619.30,
    21400.02, 21769.04, 21858.89, 22637.31, 778.42, -21858.89,
    null, null, null, null, null, null, null, null, null, null, null, null,
  ],

  "BANCO CAIXA POUPANÇA Centro 0589": [
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    0.00, 0.00, 0.00, 0.00, 406.58, 406.58,
    4000.00, 3033.55, 2847.02, 152.10, 152.93, 153.83,
    0.90, -152.93, -153.83, -0.90, 158.92, 3005.40,
    null, null, null, null, null, null, null, null, null, null, null, null,
  ],

  "C6 - RENDA VARIAVEL": [
    51.85, 53.61, 9.21, 9.07, 8.90, 8.99,
    8.69, 8.06, 8.27, 7.78, 7.68, 7.94,
    8.01, 9.09, 8.94, 8.36, 7.98, 7.64,
    -0.34, -7.98, -7.64, 0.34, 9.09, 8.98,
    8.96, 9.41, 9.65, 9.43, 9.43, 9.96,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    null, null, null, null, null, null, null, null, null, null, null, null,
  ],

  "C6 - RENDA FIXA": [
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    30.19, 165.93, 167.18, 169.40, 170.46, 171.79,
    173.34, 175.69, 176.12, 177.67, 178.80, 180.10,
    181.96, 183.51, 185.25, 186.75, 189.59, 2.84,
    -186.75, -189.59, -2.84, 198.90, 201.91, 204.18,
    206.25, 208.33, 210.68, 210.68, 216.53, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    null, null, null, null, null, null, null, null, null, null, null, null,
  ],

  "C6 - TESOURO": [
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    34.76, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    null, null, null, null, null, null, null, null, null, null, null, null,
  ],

  "C6 - CORRENTE": [
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    0.07, 0.98, 1.21, 1.21, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.13, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    null, null, null, null, null, null, null, null, null, null, null, null,
  ],

  "BINANCE - EARN": [
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, 35.17, 137.51,
    166.80, 201.22, 251.86, 288.26, 317.59, 300.00,
    322.71, 301.92, 332.33, 376.72, 497.42, 498.28,
    0.86, -497.42, -498.28, -0.86, 278.55, 0.58,
    0.61, 0.11, 0.14, 0.04, 0.04, 0.11,
    null, null, null, null, null, null, null, null, null, null, null, null,
  ],

  "BINANCE - FUNDOS": [
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, 8.75, 20.09, 40.57,
    0.00, 0.00, 0.00, 7.81, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    null, null, null, null, null, null, null, null, null, null, null, null,
  ],

  "BINANCE - CLOUD MINIG": [
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, 42.81, 42.81,
    42.81, 42.81, 162.54, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    null, null, null, null, null, null, null, null, null, null, null, null,
  ],

  "BINANCE - SPOT": [
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, 1.32, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 1.89, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    null, null, null, null, null, null, null, null, null, null, null, null,
  ],

  "BINANCE - LAUNCHPAD": [
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null, null, null, null,
  ],

  "TRANSPORTE UBER E 99": [
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, 116.79, 252.70,
    273.63, 300.00, 555.19, 400.09, 693.26, 12.99,
    5.40, 478.99, 335.63, 0.00, -335.63, -335.63,
    0.00, 335.63, 0.00, 2.91, 14.96, 15.12,
    null, null, null, null, null, null, null, null, null, null, null, null,
  ],

  "MERCADO PAGO": [
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    0.00, 0.00, 0.00, 12.01, 12.10, 30.44,
    30.82, 0.38, -30.44, -30.82, -0.38, 0.00,
    0.11, 0.11, 0.11, 0.00, 0.10, 0.10,
    null, null, null, null, null, null, null, null, null, null, null, null,
  ],

  "Moto CB 250 TWISTER 2003": [
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    8000.00, 8000.00, 8000.00, 8000.00, 8000.00, 8000.00,
    8000.00, 8000.00, 8000.00, 8000.00, 8000.00, 8000.00,
    8000.00, 8000.00, 8000.00, 8000.00, 8000.00, 8000.00,
    8000.00, 8000.00, 8000.00, 8000.00, 0.00, 0.00,
    null, null, null, null, null, null, null, null, null, null, null, null,
  ],

  "Moto CB 250 TWISTER/FLEXONE 2022": [
    null, null, null, null, null, 8000.00,
    8116.79, 8252.70, 8273.63, 8300.00, 8555.19, 8400.09,
    8693.26, 8012.99, 8017.41, 8491.09, 8366.07, 8030.82,
    7664.75, 7633.93, 7969.18, 8335.25, 8000.00, 8003.02,
    8015.07, 8015.23, 8000.00, 8000.10, 8000.10, 20946.00,
    20947.12, 20942.63, 20941.00, 20941.00, 20994.00, 20811.00,
    20829.00, 20862.00, 20755.00, -107.00, -20862.00,
    null, null, null, null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null,
  ],
};

// ============================================================
// CONFIG
// ============================================================
const STORAGE_KEY_BANCOS = "nino2026_bancos";
const STORAGE_KEY_CAT_HIDDEN = "nino2026_categorias_hidden";
const STORAGE_KEY_CAT_ALIAS = "nino2026_categorias_alias";
const STORAGE_KEY_CAT_CUSTOM = "nino2026_categorias_custom";
const STORAGE_KEY_VALORES_EDIT = "nino2026_valores_editados";
const STORAGE_KEY_PERIODOS = "nino2026_periodos";

const BANCOS_PADRAO = [
  "BANCO DO BRASIL",
  "RICO",
  "PIC PAY",
  "INTER",
  "BANCO CAIXA",
  "C6",
  "BINANCE",
  "Moto CB 250 TWISTER/FLEXONE 2022",
];

// ============================================================
// ESTADO GLOBAL
// ============================================================
let bancos = [];
let categoriasVisiveis = [];
let todasCategoriasChaves = Object.keys(DADOS_EMBUTIDOS);
let graficoInstance = null;
let categoriasSelecionadas = new Set();
let _chavesParaMover = [];

let dados = {
  periodos: [...PERIODOS],
  categorias: [],
  matriz: {},
};

// ============================================================
// HELPERS
// ============================================================
function loadJSON(key, fallback) {
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : fallback;
  } catch { return fallback; }
}
function saveJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// ============================================================
// VALORES EDITADOS
// ============================================================
function getValoresEditados() { return loadJSON(STORAGE_KEY_VALORES_EDIT, {}); }
function setValoresEditados(obj) { saveJSON(STORAGE_KEY_VALORES_EDIT, obj); }
function chaveEdicao(c, p) { return `${c}|||${p}`; }
function temEdicao(c, p) {
  return Object.prototype.hasOwnProperty.call(getValoresEditados(), chaveEdicao(c, p));
}
function contarEdicoes() { return Object.keys(getValoresEditados()).length; }
function editarValor(c, p, v) {
  const ed = getValoresEditados();
  ed[chaveEdicao(c, p)] = v;
  setValoresEditados(ed);
}
function removerEdicao(c, p) {
  const ed = getValoresEditados();
  delete ed[chaveEdicao(c, p)];
  setValoresEditados(ed);
}
function limparTodasEdicoes() { setValoresEditados({}); }
function aplicarEdicoes() {
  const ed = getValoresEditados();
  for (const chave in ed) {
    const [cat, per] = chave.split("|||");
    if (dados.matriz[cat] && per in dados.matriz[cat]) {
      dados.matriz[cat][per] = ed[chave];
    }
  }
}

// ============================================================
// PERÍODOS
// ============================================================
function getPeriodos() {
  const salvo = loadJSON(STORAGE_KEY_PERIODOS, null);
  if (Array.isArray(salvo) && salvo.length > 0) return salvo;
  return [...PERIODOS_PADRAO];
}
function setPeriodos(arr) {
  saveJSON(STORAGE_KEY_PERIODOS, arr);
  PERIODOS = [...arr];
  dados.periodos = [...arr];
}
function salvarPeriodos() { setPeriodos(PERIODOS); }
function restaurarPeriodosPadrao() { setPeriodos([...PERIODOS_PADRAO]); }
function ordenarPeriodos() {
  const idx = (m) => MESES.indexOf(m);
  PERIODOS.sort((a, b) => {
    const [ma, aa] = a.split(", ");
    const [mb, ab] = b.split(", ");
    const na = parseInt(aa, 10), nb = parseInt(ab, 10);
    if (na !== nb) return na - nb;
    return idx(ma) - idx(mb);
  });
}
function adicionarAno(ano) {
  ano = parseInt(ano, 10);
  if (isNaN(ano) || ano < 1900 || ano > 2999) return { ok: false, msg: "Ano inválido." };
  let n = 0;
  for (const mes of MESES) {
    const p = `${mes}, ${ano}`;
    if (!PERIODOS.includes(p)) { PERIODOS.push(p); n++; }
  }
  if (n === 0) return { ok: false, msg: "Esse ano já está cadastrado." };
  ordenarPeriodos();
  salvarPeriodos();
  return { ok: true, adicionados: n };
}
function adicionarMes(mes, ano) {
  ano = parseInt(ano, 10);
  if (!MESES.includes(mes)) return { ok: false, msg: "Mês inválido." };
  if (isNaN(ano) || ano < 1900 || ano > 2999) return { ok: false, msg: "Ano inválido." };
  const p = `${mes}, ${ano}`;
  if (PERIODOS.includes(p)) return { ok: false, msg: "Esse período já existe." };
  PERIODOS.push(p);
  ordenarPeriodos();
  salvarPeriodos();
  return { ok: true };
}
function removerPeriodo(p) {
  PERIODOS = PERIODOS.filter(x => x !== p);
  salvarPeriodos();
}

// ============================================================
// BANCOS
// ============================================================
function carregarBancos() {
  const salvo = loadJSON(STORAGE_KEY_BANCOS, null);
  if (Array.isArray(salvo) && salvo.length > 0) bancos = salvo;
  else bancos = [...BANCOS_PADRAO];
}
function salvarBancos() { saveJSON(STORAGE_KEY_BANCOS, bancos); }

function adicionarBanco(nome) {
  nome = nome.trim();
  if (!nome) return { ok: false, msg: "Nome vazio." };
  if (bancos.some(b => b.toLowerCase() === nome.toLowerCase()))
    return { ok: false, msg: "Esse banco já existe." };
  bancos.push(nome);
  salvarBancos();
  return { ok: true };
}
function removerBanco(nome) {
  bancos = bancos.filter(b => b !== nome);
  salvarBancos();
}
function renomearBanco(a, n) {
  n = n.trim();
  if (!n) return { ok: false, msg: "Nome vazio." };
  if (a === n) return { ok: true };
  if (bancos.some(b => b.toLowerCase() === n.toLowerCase()))
    return { ok: false, msg: "Já existe um banco com esse nome." };
  const i = bancos.indexOf(a);
  if (i === -1) return { ok: false, msg: "Banco não encontrado." };
  bancos[i] = n;
  salvarBancos();
  return { ok: true };
}
function restaurarBancosPadrao() { bancos = [...BANCOS_PADRAO]; salvarBancos(); }

// ============================================================
// CATEGORIAS
// ============================================================
function getCategoriasHidden() { return loadJSON(STORAGE_KEY_CAT_HIDDEN, []); }
function getCategoriasAlias() { return loadJSON(STORAGE_KEY_CAT_ALIAS, {}); }
function getCategoriasCustom() { return loadJSON(STORAGE_KEY_CAT_CUSTOM, []); }
function setCategoriasHidden(v) { saveJSON(STORAGE_KEY_CAT_HIDDEN, v); }
function setCategoriasAlias(v) { saveJSON(STORAGE_KEY_CAT_ALIAS, v); }
function setCategoriasCustom(v) { saveJSON(STORAGE_KEY_CAT_CUSTOM, v); }

function rebuildCategoriasVisiveis() {
  const hidden = new Set(getCategoriasHidden());
  const alias = getCategoriasAlias();
  const custom = getCategoriasCustom();

  categoriasVisiveis = [];

  for (const chave of todasCategoriasChaves) {
    if (hidden.has(chave)) continue;
    categoriasVisiveis.push({
      chave,
      exibida: alias[chave] || chave,
      valores: DADOS_EMBUTIDOS[chave],
      custom: false,
    });
  }

  for (const nome of custom) {
    if (hidden.has(nome)) continue;
    if (todasCategoriasChaves.includes(nome)) continue;
    categoriasVisiveis.push({
      chave: nome,
      exibida: alias[nome] || nome,
      valores: [],
      custom: true,
    });
  }

  const nomes = new Set();
  const filtradas = [];
  for (const c of categoriasVisiveis) {
    let nome = c.exibida, i = 1;
    while (nomes.has(nome)) nome = `${c.exibida} (${i++})`;
    nomes.add(nome);
    filtradas.push({ ...c, exibida: nome });
  }
  categoriasVisiveis = filtradas;

  dados.categorias = categoriasVisiveis.map(c => c.exibida);
  dados.matriz = {};
  const periodosPadrao = PERIODOS_PADRAO;
  for (const cat of categoriasVisiveis) {
    dados.matriz[cat.exibida] = {};
    for (const per of dados.periodos) {
      const idx = periodosPadrao.indexOf(per);
      dados.matriz[cat.exibida][per] =
        (idx >= 0 && idx < cat.valores.length) ? cat.valores[idx] : null;
    }
  }
  aplicarEdicoes();
}

function adicionarCategoria(nome) {
  nome = nome.trim();
  if (!nome) return { ok: false, msg: "Nome vazio." };
  const todos = [...todasCategoriasChaves, ...getCategoriasCustom()];
  if (todos.some(n => n.toLowerCase() === nome.toLowerCase()))
    return { ok: false, msg: "Já existe uma categoria com esse nome." };
  const custom = getCategoriasCustom();
  custom.push(nome);
  setCategoriasCustom(custom);
  return { ok: true };
}
function renomearCategoria(chave, novo) {
  novo = novo.trim();
  if (!novo) return { ok: false, msg: "Nome vazio." };
  const alias = getCategoriasAlias();
  if (alias[chave] === novo) return { ok: true };
  const outros = [
    ...todasCategoriasChaves.filter(k => k !== chave).map(k => alias[k] || k),
    ...getCategoriasCustom().filter(k => k !== chave).map(k => alias[k] || k),
  ];
  if (outros.some(n => n.toLowerCase() === novo.toLowerCase()))
    return { ok: false, msg: "Já existe uma categoria com esse nome." };
  alias[chave] = novo;
  setCategoriasAlias(alias);
  return { ok: true };
}
function removerCategoria(chave) {
  const h = getCategoriasHidden();
  if (!h.includes(chave)) { h.push(chave); setCategoriasHidden(h); }
}
function restaurarCategoriasPadrao() {
  setCategoriasHidden([]);
  setCategoriasAlias({});
  setCategoriasCustom([]);
}

function moverCategoria(chaveOuExibida, bancoDestino) {
  const cat = categoriasVisiveis.find(c => c.chave === chaveOuExibida || c.exibida === chaveOuExibida);
  if (!cat) return { ok: false, msg: "Categoria não encontrada." };

  const nomeAtual = cat.exibida;
  const bancoAtual = encontrarBancoDaCategoria(nomeAtual);

  if ((bancoAtual || "") === (bancoDestino || "")) {
    return { ok: false, msg: "A categoria já está nesse banco." };
  }

  let sufixo = nomeAtual;
  if (bancoAtual) {
    const bU = bancoAtual.toUpperCase();
    const nU = nomeAtual.toUpperCase();
    if (nU === bU) sufixo = "";
    else if (nU.startsWith(bU + " - ")) sufixo = nomeAtual.slice(bancoAtual.length + 3);
    else if (nU.startsWith(bU + " – ")) sufixo = nomeAtual.slice(bancoAtual.length + 3);
    else if (nU.startsWith(bU + " ")) sufixo = nomeAtual.slice(bancoAtual.length + 1);
    else if (nU.startsWith(bU + "-")) sufixo = nomeAtual.slice(bancoAtual.length + 1);
  }

  let novoNome;
  if (bancoDestino) novoNome = sufixo ? `${bancoDestino} - ${sufixo}` : bancoDestino;
  else novoNome = sufixo || nomeAtual;

  if (novoNome === nomeAtual) return { ok: true, msg: "Sem alterações." };

  const r = renomearCategoria(cat.chave, novoNome);
  if (!r.ok) return r;

  const ed = getValoresEditados();
  const novasEd = {};
  for (const k in ed) {
    const [c, p] = k.split("|||");
    if (c === nomeAtual) novasEd[`${novoNome}|||${p}`] = ed[k];
    else novasEd[k] = ed[k];
  }
  setValoresEditados(novasEd);

  return { ok: true, novoNome };
}

// ============================================================
// AGRUPAMENTO POR BANCO
// ============================================================
function encontrarBancoDaCategoria(categoria) {
  const cat = categoria.toUpperCase();
  for (const b of bancos) {
    const bU = b.toUpperCase();
    if (cat === bU) return b;
    if (cat.startsWith(bU + " ") || cat.startsWith(bU + "-") || cat.startsWith(bU + " –")) return b;
  }
  return null;
}
function categoriaPertenceAoBanco(categoria, banco) {
  if (!banco) return true;
  const cat = categoria.toUpperCase();
  const b = banco.toUpperCase();
  if (cat === b) return true;
  if (cat.startsWith(b + " ") || cat.startsWith(b + "-") || cat.startsWith(b + " –")) return true;
  return false;
}
function agruparCategorias(categorias) {
  const mapa = new Map();
  const semBanco = [];
  for (const cat of categorias) {
    const banco = encontrarBancoDaCategoria(cat);
    if (banco) {
      if (!mapa.has(banco)) mapa.set(banco, []);
      mapa.get(banco).push(cat);
    } else {
      semBanco.push(cat);
    }
  }
  const grupos = [];
  for (const b of bancos) {
    grupos.push({ banco: b, categorias: mapa.get(b) || [] });
  }
  if (semBanco.length > 0) grupos.push({ banco: null, categorias: semBanco });
  return grupos;
}

// ============================================================
// FORMATAÇÃO
// ============================================================
const fmt = new Intl.NumberFormat("pt-BR", {
  style: "currency", currency: "BRL",
  minimumFractionDigits: 2, maximumFractionDigits: 2,
});
function formatarValor(v) {
  if (v === null || v === undefined) return "—";
  return fmt.format(v);
}

// ============================================================
// MENU BANCOS
// ============================================================
function renderizarListaBancos() {
  const ul = document.getElementById("listaBancos");
  ul.innerHTML = "";
  if (bancos.length === 0) {
    const li = document.createElement("li");
    li.style.color = "var(--fg-muted)";
    li.style.fontStyle = "italic";
    li.textContent = "Nenhum banco cadastrado.";
    ul.appendChild(li);
    return;
  }
  bancos.forEach(nome => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.className = "nome-banco";
    span.textContent = nome;

    const btnA = document.createElement("button");
    btnA.type = "button";
    btnA.className = "btn-acao btn-alterar";
    btnA.textContent = "✏️ Alterar";

    const btnE = document.createElement("button");
    btnE.type = "button";
    btnE.className = "btn-acao btn-excluir";
    btnE.textContent = "🗑️ Excluir";

    btnA.addEventListener("click", () => editarBancoInline(li, nome));
    btnE.addEventListener("click", () => {
      if (confirm(`Excluir o banco "${nome}"?`)) {
        removerBanco(nome);
        renderizarListaBancos();
        atualizarContadorBancos();
        atualizarSelectBancos();
        atualizarSelectCategorias();
        renderizarTabela();
        atualizarGrafico();
      }
    });

    li.appendChild(span);
    li.appendChild(btnA);
    li.appendChild(btnE);
    ul.appendChild(li);
  });
}
function editarBancoInline(li, nomeAtual) {
  li.innerHTML = "";
  const input = document.createElement("input");
  input.type = "text";
  input.className = "editar-nome";
  input.value = nomeAtual;

  const btnS = document.createElement("button");
  btnS.type = "button";
  btnS.className = "btn-acao btn-salvar";
  btnS.textContent = "✔ Salvar";

  const btnC = document.createElement("button");
  btnC.type = "button";
  btnC.className = "btn-acao btn-cancelar-edicao";
  btnC.textContent = "✖";

  const salvar = () => {
    const r = renomearBanco(nomeAtual, input.value);
    if (!r.ok) { alert(r.msg); return; }
    renderizarListaBancos();
    atualizarSelectBancos();
    atualizarSelectCategorias();
    renderizarTabela();
    atualizarGrafico();
  };
  btnS.addEventListener("click", salvar);
  btnC.addEventListener("click", renderizarListaBancos);
  input.addEventListener("keydown", e => {
    if (e.key === "Enter") salvar();
    if (e.key === "Escape") renderizarListaBancos();
  });
  li.appendChild(input); li.appendChild(btnS); li.appendChild(btnC);
  input.focus(); input.select();
}
function atualizarContadorBancos() {
  document.getElementById("contadorBancos").textContent =
    `${bancos.length} banco${bancos.length === 1 ? "" : "s"} cadastrado${bancos.length === 1 ? "" : "s"}`;
}
function atualizarSelectBancos() {
  const sel = document.getElementById("filtroBanco");
  const atual = sel.value;
  sel.innerHTML = '<option value="">Todos</option>';
  for (const b of bancos) {
    const opt = document.createElement("option");
    opt.value = b; opt.textContent = b;
    sel.appendChild(opt);
  }
  if (bancos.includes(atual)) sel.value = atual;
}

// ============================================================
// MENU CATEGORIAS
// ============================================================
function renderizarListaCategorias() {
  const ul = document.getElementById("listaCategorias");
  ul.innerHTML = "";

  if (categoriasVisiveis.length === 0) {
    const li = document.createElement("li");
    li.style.color = "var(--fg-muted)";
    li.style.fontStyle = "italic";
    li.textContent = "Nenhuma categoria.";
    ul.appendChild(li);
    atualizarBarraAcoesCategorias();
    return;
  }

  categoriasVisiveis.forEach(cat => {
    const li = document.createElement("li");
    if (cat.custom) li.classList.add("categoria-custom");
    if (categoriasSelecionadas.has(cat.chave)) li.classList.add("selecionada");

    const check = document.createElement("input");
    check.type = "checkbox";
    check.className = "check-categoria";
    check.checked = categoriasSelecionadas.has(cat.chave);
    check.title = "Selecionar";
    check.addEventListener("change", () => {
      if (check.checked) categoriasSelecionadas.add(cat.chave);
      else categoriasSelecionadas.delete(cat.chave);
      li.classList.toggle("selecionada", check.checked);
      atualizarBarraAcoesCategorias();
    });

    const span = document.createElement("span");
    span.className = "nome-banco";
    span.textContent = cat.exibida;

    const btnMover = document.createElement("button");
    btnMover.type = "button";
    btnMover.className = "btn-acao btn-mover";
    btnMover.textContent = "🔀 Mover";

    const btnA = document.createElement("button");
    btnA.type = "button";
    btnA.className = "btn-acao btn-alterar";
    btnA.textContent = "✏️ Alterar";

    const btnE = document.createElement("button");
    btnE.type = "button";
    btnE.className = "btn-acao btn-excluir";
    btnE.textContent = "🗑️ Excluir";

    btnMover.addEventListener("click", () => abrirModalMover([cat.chave]));
    btnA.addEventListener("click", () => editarCategoriaInline(li, cat));
    btnE.addEventListener("click", () => {
      if (confirm(`Excluir a categoria "${cat.exibida}"?`)) {
        removerCategoria(cat.chave);
        categoriasSelecionadas.delete(cat.chave);
        rebuildCategoriasVisiveis();
        renderizarListaCategorias();
        atualizarContadorCategorias();
        atualizarSelectCategorias();
        renderizarTabela();
        atualizarGrafico();
      }
    });

    li.appendChild(check);
    li.appendChild(span);
    li.appendChild(btnMover);
    li.appendChild(btnA);
    li.appendChild(btnE);
    ul.appendChild(li);
  });

  atualizarBarraAcoesCategorias();
}

function atualizarBarraAcoesCategorias() {
  const btn = document.getElementById("btnMoverSelecionadas");
  const checkTodas = document.getElementById("checkTodasCategorias");
  if (!btn || !checkTodas) return;

  const n = categoriasSelecionadas.size;
  btn.disabled = n === 0;
  btn.textContent = n === 0 ? "🔀 Mover selecionadas" : `🔀 Mover ${n} selecionada${n === 1 ? "" : "s"}`;

  const total = categoriasVisiveis.length;
  if (total === 0 || n === 0) {
    checkTodas.checked = false;
    checkTodas.indeterminate = false;
  } else if (n === total) {
    checkTodas.checked = true;
    checkTodas.indeterminate = false;
  } else {
    checkTodas.checked = false;
    checkTodas.indeterminate = true;
  }
}

function editarCategoriaInline(li, cat) {
  li.innerHTML = "";
  const input = document.createElement("input");
  input.type = "text";
  input.className = "editar-nome";
  input.value = cat.exibida;

  const btnS = document.createElement("button");
  btnS.type = "button";
  btnS.className = "btn-acao btn-salvar";
  btnS.textContent = "✔ Salvar";

  const btnC = document.createElement("button");
  btnC.type = "button";
  btnC.className = "btn-acao btn-cancelar-edicao";
  btnC.textContent = "✖";

  const salvar = () => {
    const r = renomearCategoria(cat.chave, input.value);
    if (!r.ok) { alert(r.msg); return; }
    rebuildCategoriasVisiveis();
    renderizarListaCategorias();
    atualizarSelectCategorias();
    renderizarTabela();
    atualizarGrafico();
  };
  btnS.addEventListener("click", salvar);
  btnC.addEventListener("click", renderizarListaCategorias);
  input.addEventListener("keydown", e => {
    if (e.key === "Enter") salvar();
    if (e.key === "Escape") renderizarListaCategorias();
  });
  li.appendChild(input); li.appendChild(btnS); li.appendChild(btnC);
  input.focus(); input.select();
}

function atualizarContadorCategorias() {
  document.getElementById("contadorCategorias").textContent =
    `${categoriasVisiveis.length} categoria${categoriasVisiveis.length === 1 ? "" : "s"}`;
}

// ============================================================
// MODAL MOVER CATEGORIA(S)
// ============================================================
function abrirModalMover(chaves) {
  _chavesParaMover = [...chaves];

  const select = document.getElementById("selectBancoDestino");
  select.innerHTML = '<option value="">— Sem banco (📌 Outros) —</option>';
  for (const b of bancos) {
    const opt = document.createElement("option");
    opt.value = b;
    opt.textContent = `🏦 ${b}`;
    select.appendChild(opt);
  }

  const info = document.getElementById("infoModalMover");
  if (_chavesParaMover.length === 1) {
    const cat = categoriasVisiveis.find(c => c.chave === _chavesParaMover[0]);
    const atual = encontrarBancoDaCategoria(cat.exibida) || "Sem banco";
    info.textContent = `Mover "${cat.exibida}" (atualmente: ${atual})`;
  } else {
    info.textContent = `Mover ${_chavesParaMover.length} categorias selecionadas.`;
  }

  document.getElementById("modalMover").hidden = false;
  select.focus();
}

function fecharModalMover() {
  document.getElementById("modalMover").hidden = true;
  _chavesParaMover = [];
}

function confirmarMover() {
  const destino = document.getElementById("selectBancoDestino").value;
  if (_chavesParaMover.length === 0) { fecharModalMover(); return; }

  let ok = 0;
  const falhas = [];
  for (const chave of _chavesParaMover) {
    const r = moverCategoria(chave, destino);
    if (r.ok) ok++;
    else falhas.push(r.msg);
  }

  categoriasSelecionadas.clear();
  rebuildCategoriasVisiveis();
  renderizarListaCategorias();
  atualizarContadorCategorias();
  atualizarSelectCategorias();
  renderizarTabela();
  atualizarGrafico();

  fecharModalMover();

  if (falhas.length > 0) {
    alert(`✔ ${ok} movida(s).\n⚠ ${falhas.length} falha(s):\n- ${falhas.join("\n- ")}`);
  }
}

// ============================================================
// MENU PERÍODOS
// ============================================================
function renderizarListaPeriodos() {
  const ul = document.getElementById("listaPeriodos");
  ul.innerHTML = "";
  if (dados.periodos.length === 0) {
    const li = document.createElement("li");
    li.style.color = "var(--fg-muted)";
    li.style.fontStyle = "italic";
    li.textContent = "Nenhum período cadastrado.";
    ul.appendChild(li);
    return;
  }
  const porAno = new Map();
  for (const p of dados.periodos) {
    const [m, a] = p.split(", ");
    if (!porAno.has(a)) porAno.set(a, []);
    porAno.get(a).push(p);
  }
  for (const [ano, periodos] of porAno) {
    const liAno = document.createElement("li");
    liAno.style.background = "var(--bg-3)";
    liAno.style.fontWeight = "700";
    liAno.style.color = "var(--accent)";
    liAno.style.borderBottom = "2px solid var(--accent)";
    liAno.style.paddingTop = "8px";
    liAno.style.paddingBottom = "8px";

    const span = document.createElement("span");
    span.className = "nome-banco";
    span.style.fontWeight = "700";
    span.style.color = "var(--accent)";
    span.textContent = `📅 ${ano} (${periodos.length} ${periodos.length === 1 ? "mês" : "meses"})`;

    const btnR = document.createElement("button");
    btnR.type = "button";
    btnR.className = "btn-acao btn-excluir";
    btnR.textContent = "🗑️ Ano";
    btnR.addEventListener("click", (e) => {
      e.stopPropagation();
      if (confirm(`Remover todos os ${periodos.length} meses de ${ano}?`)) {
        for (const p of periodos) removerPeriodo(p);
        renderizarListaPeriodos(); atualizarContadorPeriodos(); atualizarInfoPeriodos();
        preencherSelectPeriodos(); preencherSelectAnos();
        rebuildCategoriasVisiveis(); renderizarTabela(); atualizarGrafico();
      }
    });
    liAno.appendChild(span); liAno.appendChild(btnR);
    ul.appendChild(liAno);
    for (const p of periodos) {
      const li = document.createElement("li");
      li.style.paddingLeft = "20px";
      const spanM = document.createElement("span");
      spanM.className = "nome-banco";
      spanM.textContent = p;
      const btnE = document.createElement("button");
      btnE.type = "button";
      btnE.className = "btn-acao btn-excluir";
      btnE.textContent = "🗑️ Excluir";
      btnE.addEventListener("click", () => {
        if (confirm(`Excluir o período "${p}"?`)) {
          removerPeriodo(p);
          renderizarListaPeriodos(); atualizarContadorPeriodos(); atualizarInfoPeriodos();
          preencherSelectPeriodos(); preencherSelectAnos();
          rebuildCategoriasVisiveis(); renderizarTabela(); atualizarGrafico();
        }
      });
      li.appendChild(spanM); li.appendChild(btnE);
      ul.appendChild(li);
    }
  }
}
function atualizarContadorPeriodos() {
  document.getElementById("contadorPeriodos").textContent =
    `${dados.periodos.length} período${dados.periodos.length === 1 ? "" : "s"}`;
}
function atualizarInfoPeriodos() {
  const el = document.getElementById("infoPeriodos");
  if (!el) return;
  const anos = new Set(dados.periodos.map(p => p.split(", ")[1]));
  el.textContent = `${dados.periodos.length} meses • ${anos.size} ano(s): ${[...anos].sort().join(", ")}`;
}

// ============================================================
// SINCRONIZAÇÃO BANCO ↔ CATEGORIA
// ============================================================
function atualizarSelectCategorias() {
  const selBanco = document.getElementById("filtroBanco");
  const selCat = document.getElementById("filtroCategoria");
  const bancoSel = selBanco.value;
  const catAtual = selCat.value;

  let cats = categoriasVisiveis;
  if (bancoSel) {
    cats = categoriasVisiveis.filter(c => categoriaPertenceAoBanco(c.exibida, bancoSel));
  }

  selCat.innerHTML = '<option value="">Todas</option>';
  const grupos = agruparCategorias(cats.map(c => c.exibida));
  for (const g of grupos) {
    if (bancoSel && g.categorias.length === 0) continue;
    const og = document.createElement("optgroup");
    const suf = g.categorias.length === 0 ? " (vazio)" : "";
    og.label = g.banco ? `🏦 ${g.banco}${suf}` : "📌 Outros";
    for (const nome of g.categorias) {
      const opt = document.createElement("option");
      opt.value = nome; opt.textContent = nome;
      og.appendChild(opt);
    }
    selCat.appendChild(og);
  }
  const existe = Array.from(selCat.options).some(o => o.value === catAtual);
  if (existe && catAtual) selCat.value = catAtual;
  else selCat.value = "";
}
function sincronizarBancoPorCategoria() {
  const selCat = document.getElementById("filtroCategoria");
  const selBanco = document.getElementById("filtroBanco");
  const cat = selCat.value;
  if (!cat) return;
  const b = encontrarBancoDaCategoria(cat);
  if (b) {
    selBanco.value = b;
    atualizarSelectCategorias();
    selCat.value = cat;
  } else {
    selBanco.value = "";
    atualizarSelectCategorias();
    selCat.value = cat;
  }
}

// ============================================================
// SELECTS
// ============================================================
function preencherSelectPeriodos() {
  const sel = document.getElementById("filtroPeriodo");
  const at = sel.value;
  sel.innerHTML = '<option value="">Todos</option>';
  for (const p of dados.periodos) {
    const o = document.createElement("option");
    o.value = p; o.textContent = p;
    sel.appendChild(o);
  }
  if (dados.periodos.includes(at)) sel.value = at;
}
function preencherSelectAnos() {
  const sel = document.getElementById("filtroAno");
  const at = sel.value;
  sel.innerHTML = '<option value="">Todos</option>';
  const anos = [...new Set(dados.periodos.map(p => p.split(", ")[1]))].sort();
  for (const a of anos) {
    const o = document.createElement("option");
    o.value = a; o.textContent = a;
    sel.appendChild(o);
  }
  if (anos.includes(at)) sel.value = at;
}
function preencherSelectMeses() {
  const sel = document.getElementById("filtroMes");
  sel.innerHTML = '<option value="">Todos</option>';
  for (const m of MESES) {
    const o = document.createElement("option");
    o.value = m; o.textContent = m;
    sel.appendChild(o);
  }
}
function periodoPassaFiltros(p) {
  const ano = document.getElementById("filtroAno").value;
  const mes = document.getElementById("filtroMes").value;
  const per = document.getElementById("filtroPeriodo").value;
  if (per) return p === per;
  const [m, a] = p.split(", ");
  if (ano && a !== ano) return false;
  if (mes && m !== mes) return false;
  return true;
}
function limparFiltros() {
  ["filtroBanco","filtroCategoria","filtroAno","filtroMes","filtroPeriodo"].forEach(id => {
    document.getElementById(id).value = "";
  });
  document.getElementById("busca").value = "";
  document.getElementById("filtroTipo").value = "todos";
  atualizarSelectCategorias();
  renderizarTabela();
  atualizarGrafico();
}

// ============================================================
// RENDERIZAÇÃO DA TABELA
// ============================================================
function renderizarTabela() {
  const filtroBanco = document.getElementById("filtroBanco").value;
  const filtroCat = document.getElementById("filtroCategoria").value;
  const busca = document.getElementById("busca").value.trim().toLowerCase();
  const tipo = document.getElementById("filtroTipo").value;

  const thead = document.getElementById("thead");
  const tbody = document.getElementById("tbody");

  const periodosVisiveis = dados.periodos.filter(periodoPassaFiltros);

  let htmlThead = "<tr><th>Categoria</th>";
  for (const p of periodosVisiveis) htmlThead += `<th>${p}</th>`;
  htmlThead += "</tr>";
  thead.innerHTML = htmlThead;

  const catsFiltradas = dados.categorias.filter(c => {
    if (filtroCat && c !== filtroCat) return false;
    if (busca && !c.toLowerCase().includes(busca)) return false;
    if (filtroBanco && !categoriaPertenceAoBanco(c, filtroBanco)) return false;
    return true;
  });

  let grupos = agruparCategorias(catsFiltradas);
  const temFiltro = filtroBanco || filtroCat || busca || tipo !== "todos";
  if (temFiltro) grupos = grupos.filter(g => g.categorias.length > 0);

  let html = "";
  let soma = 0, maior = -Infinity, menor = Infinity, celulas = 0;

  for (const g of grupos) {
    const qtd = g.categorias.length;
    if (g.banco) {
      const suf = qtd === 0 ? " (vazio)" : ` (${qtd})`;
      html += `<tr class="grupo-banco"><td colspan="${periodosVisiveis.length + 1}">🏦 ${g.banco}${suf}</td></tr>`;
    } else {
      html += `<tr class="grupo-banco"><td colspan="${periodosVisiveis.length + 1}">📌 Outros (${qtd})</td></tr>`;
    }

    if (qtd === 0) {
      html += `<tr class="subcategoria vazio"><td colspan="${periodosVisiveis.length + 1}" style="color:var(--fg-muted);font-style:italic;padding-left:28px">Nenhuma categoria cadastrada neste banco ainda.</td></tr>`;
      continue;
    }

    for (const cat of g.categorias) {
      html += `<tr class="subcategoria"><td>${cat}</td>`;
      for (const per of periodosVisiveis) {
        const v = dados.matriz[cat] ? dados.matriz[cat][per] : null;

        if (tipo === "positivos" && (v === null || v <= 0)) { html += `<td class="num zero">·</td>`; continue; }
        if (tipo === "negativos" && (v === null || v >= 0)) { html += `<td class="num zero">·</td>`; continue; }
        if (tipo === "naozero" && (v === null || v === 0)) { html += `<td class="num zero">·</td>`; continue; }

        let classe = "num";
        if (v === null) classe += " zero";
        else if (v > 0) classe += " pos";
        else if (v < 0) classe += " neg";
        else classe += " zero";
        if (temEdicao(cat, per)) classe += " editada";

        const catE = cat.replace(/"/g, "&quot;");
        const perE = per.replace(/"/g, "&quot;");

        html += `<td class="${classe}" data-cat="${catE}" data-per="${perE}" title="Clique para editar">${formatarValor(v)}</td>`;

        if (v !== null) {
          soma += v;
          if (v > maior) maior = v;
          if (v < menor) menor = v;
          celulas++;
        }
      }
      html += "</tr>";
    }
  }

  if (grupos.length === 0 || periodosVisiveis.length === 0) {
    html = `<tr><td colspan="${periodosVisiveis.length + 1}" style="text-align:center;padding:30px;color:#94a3b8">Nenhum resultado encontrado.</td></tr>`;
  }

  tbody.innerHTML = html;

  document.getElementById("totalCategorias").textContent = catsFiltradas.length;
  document.getElementById("totalPeriodos").textContent = periodosVisiveis.length;
  document.getElementById("totalCelulas").textContent = celulas.toLocaleString("pt-BR");
  document.getElementById("somaTotal").textContent = formatarValor(soma);
  document.getElementById("somaTotal").className = "valor " + (soma >= 0 ? "verde" : "vermelho");
  document.getElementById("maiorValor").textContent = maior === -Infinity ? "—" : formatarValor(maior);
  document.getElementById("menorValor").textContent = menor === Infinity ? "—" : formatarValor(menor);
  document.getElementById("infoRodape").textContent =
    `Exibindo ${catsFiltradas.length} categoria(s) em ${grupos.length} grupo(s) × ${periodosVisiveis.length} período(s).`;

  atualizarInfoValoresEditados();
}

// ============================================================
// GRÁFICO
// ============================================================
function obterDadosGrafico() {
  const filtroCat = document.getElementById("filtroCategoria").value;
  const filtroBanco = document.getElementById("filtroBanco").value;
  const filtroAno = document.getElementById("filtroAno").value;
  const filtroMes = document.getElementById("filtroMes").value;
  const filtroPer = document.getElementById("filtroPeriodo").value;
  const busca = document.getElementById("busca").value.trim();

  const periodosVisiveis = dados.periodos.filter(periodoPassaFiltros);

  const partes = [];
  if (filtroPer) partes.push(`📅 ${filtroPer}`);
  else {
    if (filtroMes) partes.push(`📅 ${filtroMes}`);
    if (filtroAno) partes.push(`📅 ${filtroAno}`);
  }
  if (busca) partes.push(`🔎 "${busca}"`);
  const sufixo = partes.length ? ` — ${partes.join(" • ")}` : "";

  if (filtroCat && dados.matriz[filtroCat]) {
    return {
      titulo: `📈 ${filtroCat}${sufixo}`,
      valores: periodosVisiveis.map(p => dados.matriz[filtroCat][p]),
      periodos: periodosVisiveis,
    };
  }

  if (filtroBanco) {
    const cats = dados.categorias.filter(c => categoriaPertenceAoBanco(c, filtroBanco));
    if (cats.length > 0) {
      const valores = periodosVisiveis.map(p => {
        let s = 0, tem = false;
        for (const c of cats) {
          const v = dados.matriz[c] ? dados.matriz[c][p] : null;
          if (v !== null) { s += v; tem = true; }
        }
        return tem ? s : null;
      });
      return {
        titulo: `📈 Soma: 🏦 ${filtroBanco}${sufixo}`,
        valores,
        periodos: periodosVisiveis,
      };
    }
  }

  if (dados.matriz["TOTAL DO PATRIMONIO"]) {
    return {
      titulo: `📈 Total do Patrimônio${sufixo}`,
      valores: periodosVisiveis.map(p => dados.matriz["TOTAL DO PATRIMONIO"][p]),
      periodos: periodosVisiveis,
    };
  }

  return { titulo: `📈 Evolução${sufixo}`, valores: [], periodos: [] };
}
function atualizarGrafico() {
  if (typeof Chart === "undefined") return;
  const ctx = document.getElementById("graficoPatrimonio");
  if (!ctx) return;
  const { titulo, valores, periodos } = obterDadosGrafico();
  document.getElementById("graficoTitulo").textContent = titulo;

  const labels = periodos.map(p => {
    const [m, a] = p.split(", ");
    return `${m.slice(0, 3)}/${a.slice(2)}`;
  });
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const textColor = isDark ? "#cbd5e1" : "#334155";
  const gridColor = isDark ? "rgba(148,163,184,0.15)" : "rgba(100,116,139,0.2)";
  const accent = isDark ? "#38bdf8" : "#0284c7";
  const accentBg = isDark ? "rgba(56,189,248,0.15)" : "rgba(2,132,199,0.12)";

  if (graficoInstance) graficoInstance.destroy();
  graficoInstance = new Chart(ctx, {
    type: "line",
    data: {
      labels,
      datasets: [{
        label: "Valor (R$)",
        data: valores,
        borderColor: accent,
        backgroundColor: accentBg,
        borderWidth: 2, tension: 0.25,
        pointRadius: 3, pointHoverRadius: 6,
        pointBackgroundColor: accent,
        fill: true, spanGaps: true,
      }],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      interaction: { mode: "index", intersect: false },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: isDark ? "#0b1220" : "#ffffff",
          titleColor: isDark ? "#e2e8f0" : "#0f172a",
          bodyColor: isDark ? "#cbd5e1" : "#334155",
          borderColor: isDark ? "#334155" : "#cbd5e1",
          borderWidth: 1, padding: 10,
          callbacks: { label: (c) => c.parsed.y === null ? "—" : fmt.format(c.parsed.y) },
        },
      },
      scales: {
        x: {
          ticks: { color: textColor, maxRotation: 45, minRotation: 45, font: { size: 10 } },
          grid: { color: gridColor },
        },
        y: {
          ticks: { color: textColor, callback: v => "R$ " + (v / 1000).toFixed(0) + "k" },
          grid: { color: gridColor },
        },
      },
    },
  });
}

// ============================================================
// CSV
// ============================================================
function exportarCSV() {
  const periodosVisiveis = dados.periodos.filter(periodoPassaFiltros);
  const linhas = [];
  linhas.push(["Categoria", ...periodosVisiveis].join(";"));
  for (const cat of dados.categorias) {
    const linha = [cat];
    for (const per of periodosVisiveis) {
      const v = dados.matriz[cat] ? dados.matriz[cat][per] : null;
      linha.push(v === null ? "" : String(v).replace(".", ","));
    }
    linhas.push(linha.join(";"));
  }
  const blob = new Blob(["\ufeff" + linhas.join("\n")], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = "planilha_nino2026.csv"; a.click();
  URL.revokeObjectURL(url);
}

// ============================================================
// EDIÇÃO INLINE DE CÉLULA
// ============================================================
function iniciarEdicaoCelula(td) {
  if (td.classList.contains("editando")) return;
  if (td.querySelector("input")) return;
  const cat = td.dataset.cat, per = td.dataset.per;
  if (!cat || !per) return;
  if (td.textContent.trim() === "·") return;

  const valorAtual = dados.matriz[cat] ? dados.matriz[cat][per] : null;
  const texto = valorAtual === null ? "" : String(valorAtual).replace(".", ",");

  const input = document.createElement("input");
  input.type = "text";
  input.className = "celula-input";
  input.value = texto;
  input.inputMode = "decimal";

  td.classList.add("editando");
  td.textContent = "";
  td.appendChild(input);
  input.focus(); input.select();

  let done = false;
  const fim = (salvar) => {
    if (done) return;
    done = true;
    if (salvar) {
      const b = input.value.trim();
      if (b === "") {
        removerEdicao(cat, per); aplicarEdicoes();
      } else {
        const n = parseFloat(b.replace(/\./g, "").replace(",", "."));
        if (isNaN(n)) {
          alert("Valor inválido. Use 1234,56");
          done = false; input.focus(); return;
        }
        editarValor(cat, per, n);
        if (!dados.matriz[cat]) dados.matriz[cat] = {};
        dados.matriz[cat][per] = n;
      }
    }
    td.classList.remove("editando");
    renderizarTabela();
    atualizarGrafico();
  };
  input.addEventListener("keydown", e => {
    if (e.key === "Enter") { e.preventDefault(); fim(true); }
    else if (e.key === "Escape") { e.preventDefault(); fim(false); }
    else if (e.key === "Delete" && e.ctrlKey) {
      e.preventDefault();
      removerEdicao(cat, per); aplicarEdicoes(); fim(true);
    }
  });
  input.addEventListener("blur", () => fim(true));
  input.addEventListener("click", e => e.stopPropagation());
}

// ============================================================
// INFO / AÇÕES DO MENU VALORES
// ============================================================
function atualizarInfoValoresEditados() {
  const el = document.getElementById("infoValoresEditados");
  if (!el) return;
  const n = contarEdicoes();
  el.textContent = n === 0 ? "Nenhuma célula editada." : `${n} célula${n === 1 ? "" : "s"} editada${n === 1 ? "" : "s"}.`;
}
function exportarEdicoesJSON() {
  const ed = getValoresEditados();
  const blob = new Blob([JSON.stringify(ed, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = `edicoes_nino2026_${Date.now()}.json`; a.click();
  URL.revokeObjectURL(url);
}
function importarEdicoesJSON(file) {
  const r = new FileReader();
  r.onload = ev => {
    try {
      const obj = JSON.parse(ev.target.result);
      if (typeof obj !== "object" || Array.isArray(obj)) throw new Error("Formato inválido");
      const merged = { ...getValoresEditados(), ...obj };
      setValoresEditados(merged);
      rebuildCategoriasVisiveis();
      renderizarTabela();
      atualizarGrafico();
      alert(`✔ ${Object.keys(obj).length} edições importadas.`);
    } catch (e) { alert("Erro: " + e.message); }
  };
  r.readAsText(file, "utf-8");
}

// ============================================================
// INICIALIZAÇÃO
// ============================================================
function iniciar() {
  PERIODOS = getPeriodos();
  dados.periodos = [...PERIODOS];

  carregarBancos();
  rebuildCategoriasVisiveis();

  renderizarListaBancos();
  atualizarContadorBancos();
  atualizarSelectBancos();

  renderizarListaCategorias();
  atualizarContadorCategorias();
  atualizarSelectCategorias();

  preencherSelectPeriodos();
  preencherSelectAnos();
  preencherSelectMeses();

  renderizarListaPeriodos();
  atualizarContadorPeriodos();
  atualizarInfoPeriodos();

  renderizarTabela();
  atualizarGrafico();

  const painelB = document.getElementById("painelBancos");
  const painelC = document.getElementById("painelCategorias");
  const painelP = document.getElementById("painelPeriodos");
  const painelV = document.getElementById("painelValores");
  const fecharTodos = () => {
    painelB.hidden = true; painelC.hidden = true;
    painelP.hidden = true; painelV.hidden = true;
  };

  // ============ MENU BANCOS ============
  document.getElementById("btnMenuBancos").addEventListener("click", (e) => {
    e.stopPropagation();
    const abrir = painelB.hidden;
    fecharTodos();
    painelB.hidden = !abrir;
    if (!painelB.hidden) {
      document.getElementById("formBanco").hidden = true;
      document.getElementById("btnCadastrarBanco").hidden = false;
    }
  });
  document.getElementById("btnFecharBancos").addEventListener("click", () => { painelB.hidden = true; });

  const btnCB = document.getElementById("btnCadastrarBanco");
  const formBanco = document.getElementById("formBanco");
  const inputNB = document.getElementById("inputNovoBanco");

  btnCB.addEventListener("click", () => {
    formBanco.hidden = false; btnCB.hidden = true;
    inputNB.value = ""; inputNB.focus();
  });
  document.getElementById("btnCancelarCadastro").addEventListener("click", () => {
    formBanco.hidden = true; btnCB.hidden = false;
  });
  formBanco.addEventListener("submit", e => {
    e.preventDefault();
    const r = adicionarBanco(inputNB.value);
    if (!r.ok) { alert(r.msg); return; }
    formBanco.hidden = true; btnCB.hidden = false; inputNB.value = "";
    renderizarListaBancos(); atualizarContadorBancos();
    atualizarSelectBancos(); atualizarSelectCategorias();
    renderizarTabela(); atualizarGrafico();
  });
  document.getElementById("btnRestaurarBancos").addEventListener("click", () => {
    if (confirm("Restaurar a lista padrão de bancos?")) {
      restaurarBancosPadrao();
      renderizarListaBancos(); atualizarContadorBancos();
      atualizarSelectBancos(); atualizarSelectCategorias();
      renderizarTabela(); atualizarGrafico();
    }
  });

  // ============ MENU CATEGORIAS ============
  document.getElementById("btnMenuCategorias").addEventListener("click", (e) => {
    e.stopPropagation();
    const abrir = painelC.hidden;
    fecharTodos();
    painelC.hidden = !abrir;
    if (!painelC.hidden) {
      document.getElementById("formCategoria").hidden = true;
      document.getElementById("btnCadastrarCategoria").hidden = false;
    }
  });
  document.getElementById("btnFecharCategorias").addEventListener("click", () => { painelC.hidden = true; });

  const btnCC = document.getElementById("btnCadastrarCategoria");
  const formCat = document.getElementById("formCategoria");
  const inputNC = document.getElementById("inputNovaCategoria");

  btnCC.addEventListener("click", () => {
    formCat.hidden = false; btnCC.hidden = true;
    inputNC.value = ""; inputNC.focus();
  });
  document.getElementById("btnCancelarCategoria").addEventListener("click", () => {
    formCat.hidden = true; btnCC.hidden = false;
  });
  formCat.addEventListener("submit", e => {
    e.preventDefault();
    const r = adicionarCategoria(inputNC.value);
    if (!r.ok) { alert(r.msg); return; }
    formCat.hidden = true; btnCC.hidden = false; inputNC.value = "";
    rebuildCategoriasVisiveis();
    renderizarListaCategorias(); atualizarContadorCategorias();
    atualizarSelectCategorias(); renderizarTabela(); atualizarGrafico();
  });
  document.getElementById("btnRestaurarCategorias").addEventListener("click", () => {
    if (confirm("Restaurar todas as categorias originais?")) {
      restaurarCategoriasPadrao();
      categoriasSelecionadas.clear();
      rebuildCategoriasVisiveis();
      renderizarListaCategorias(); atualizarContadorCategorias();
      atualizarSelectCategorias(); renderizarTabela(); atualizarGrafico();
    }
  });

  document.getElementById("checkTodasCategorias").addEventListener("change", (e) => {
    if (e.target.checked) {
      categoriasVisiveis.forEach(c => categoriasSelecionadas.add(c.chave));
    } else {
      categoriasSelecionadas.clear();
    }
    renderizarListaCategorias();
  });

  document.getElementById("btnMoverSelecionadas").addEventListener("click", () => {
    if (categoriasSelecionadas.size === 0) return;
    abrirModalMover([...categoriasSelecionadas]);
  });

  document.getElementById("btnFecharModalMover").addEventListener("click", fecharModalMover);
  document.getElementById("btnCancelarMover").addEventListener("click", fecharModalMover);
  document.getElementById("btnConfirmarMover").addEventListener("click", confirmarMover);
  document.getElementById("modalMover").addEventListener("click", (e) => {
    if (e.target.id === "modalMover") fecharModalMover();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !document.getElementById("modalMover").hidden) {
      fecharModalMover();
    }
  });

  // ============ MENU PERÍODOS ============
  document.getElementById("btnMenuPeriodos").addEventListener("click", (e) => {
    e.stopPropagation();
    const abrir = painelP.hidden;
    fecharTodos();
    painelP.hidden = !abrir;
    if (!painelP.hidden) {
      document.getElementById("formAddAno").hidden = true;
      document.getElementById("formAddMes").hidden = true;
      document.getElementById("btnAddAno").hidden = false;
      document.getElementById("btnAddMes").hidden = false;
      atualizarInfoPeriodos();
    }
  });
  document.getElementById("btnFecharPeriodos").addEventListener("click", () => { painelP.hidden = true; });

  const btnAA = document.getElementById("btnAddAno");
  const formAA = document.getElementById("formAddAno");
  const inputNA = document.getElementById("inputNovoAno");

  btnAA.addEventListener("click", () => {
    formAA.hidden = false; btnAA.hidden = true;
    document.getElementById("btnAddMes").hidden = true;
    inputNA.value = ""; inputNA.focus();
  });
  document.getElementById("btnCancelarAddAno").addEventListener("click", () => {
    formAA.hidden = true; btnAA.hidden = false;
    document.getElementById("btnAddMes").hidden = false;
  });
  formAA.addEventListener("submit", e => {
    e.preventDefault();
    const r = adicionarAno(inputNA.value);
    if (!r.ok) { alert(r.msg); return; }
    formAA.hidden = true; btnAA.hidden = false;
    document.getElementById("btnAddMes").hidden = false;
    inputNA.value = "";
    renderizarListaPeriodos(); atualizarContadorPeriodos(); atualizarInfoPeriodos();
    preencherSelectPeriodos(); preencherSelectAnos();
    rebuildCategoriasVisiveis(); renderizarTabela(); atualizarGrafico();
  });

  const btnAM = document.getElementById("btnAddMes");
  const formAM = document.getElementById("formAddMes");
  const inputNAM = document.getElementById("inputNovoAnoMes");

  btnAM.addEventListener("click", () => {
    formAM.hidden = false; btnAA.hidden = true; btnAM.hidden = true;
    inputNAM.value = ""; inputNAM.focus();
  });
  document.getElementById("btnCancelarAddMes").addEventListener("click", () => {
    formAM.hidden = true; btnAA.hidden = false; btnAM.hidden = false;
  });
  formAM.addEventListener("submit", e => {
    e.preventDefault();
    const mes = document.getElementById("selectNovoMes").value;
    const r = adicionarMes(mes, inputNAM.value);
    if (!r.ok) { alert(r.msg); return; }
    formAM.hidden = true; btnAA.hidden = false; btnAM.hidden = false;
    inputNAM.value = "";
    renderizarListaPeriodos(); atualizarContadorPeriodos(); atualizarInfoPeriodos();
    preencherSelectPeriodos(); preencherSelectAnos();
    rebuildCategoriasVisiveis(); renderizarTabela(); atualizarGrafico();
  });

  document.getElementById("btnRestaurarPeriodos").addEventListener("click", () => {
    if (confirm("Restaurar os períodos padrão (2023 a 2027)?")) {
      restaurarPeriodosPadrao();
      renderizarListaPeriodos(); atualizarContadorPeriodos(); atualizarInfoPeriodos();
      preencherSelectPeriodos(); preencherSelectAnos();
      rebuildCategoriasVisiveis(); renderizarTabela(); atualizarGrafico();
    }
  });

  // ============ MENU VALORES ============
  document.getElementById("btnMenuValores").addEventListener("click", (e) => {
    e.stopPropagation();
    const abrir = painelV.hidden;
    fecharTodos();
    painelV.hidden = !abrir;
    if (!painelV.hidden) atualizarInfoValoresEditados();
  });
  document.getElementById("btnFecharValores").addEventListener("click", () => { painelV.hidden = true; });

  document.getElementById("btnRestaurarValores").addEventListener("click", () => {
    const n = contarEdicoes();
    if (n === 0) { alert("Nenhuma célula foi editada."); return; }
    if (confirm(`Restaurar ${n} célula(s)?`)) {
      limparTodasEdicoes();
      rebuildCategoriasVisiveis();
      renderizarTabela(); atualizarGrafico(); atualizarInfoValoresEditados();
    }
  });
  document.getElementById("btnExportarEdicoes").addEventListener("click", () => {
    if (contarEdicoes() === 0) { alert("Nada para exportar."); return; }
    exportarEdicoesJSON();
  });
  document.getElementById("btnImportarEdicoes").addEventListener("click", () => {
    document.getElementById("inputImportarEdicoes").click();
  });
  document.getElementById("inputImportarEdicoes").addEventListener("change", (e) => {
    const f = e.target.files[0];
    if (f) importarEdicoesJSON(f);
    e.target.value = "";
  });

  document.addEventListener("click", e => {
    if (!e.target.closest(".menu-bancos")) fecharTodos();
  });

  // ============ FILTROS ============
  document.getElementById("filtroBanco").addEventListener("change", () => {
    atualizarSelectCategorias();
    renderizarTabela();
    atualizarGrafico();
  });
  document.getElementById("filtroCategoria").addEventListener("change", () => {
    sincronizarBancoPorCategoria();
    renderizarTabela();
    atualizarGrafico();
  });
  document.getElementById("filtroAno").addEventListener("change", () => {
    document.getElementById("filtroPeriodo").value = "";
    renderizarTabela();
    atualizarGrafico();
  });
  document.getElementById("filtroMes").addEventListener("change", () => {
    document.getElementById("filtroPeriodo").value = "";
    renderizarTabela();
    atualizarGrafico();
  });
  document.getElementById("filtroPeriodo").addEventListener("change", () => {
    const per = document.getElementById("filtroPeriodo").value;
    if (per) {
      document.getElementById("filtroAno").value = "";
      document.getElementById("filtroMes").value = "";
    }
    renderizarTabela();
    atualizarGrafico();
  });
  document.getElementById("filtroTipo").addEventListener("change", () => {
    renderizarTabela();
    atualizarGrafico();
  });
  document.getElementById("busca").addEventListener("input", () => {
    renderizarTabela();
    atualizarGrafico();
  });
  document.getElementById("btnLimparFiltros").addEventListener("click", limparFiltros);
  document.getElementById("btnCSV").addEventListener("click", exportarCSV);

  // ============ EDIÇÃO DE CÉLULA ============
  document.getElementById("tbody").addEventListener("click", (e) => {
    const td = e.target.closest("td.num");
    if (!td) return;
    if (td.textContent.trim() === "·") return;
    if (td.querySelector("input")) return;
    iniciarEdicaoCelula(td);
  });

  // ============ TOGGLE GRÁFICO ============
  document.getElementById("btnToggleGrafico").addEventListener("click", () => {
    const cont = document.getElementById("graficoContainer");
    const btn = document.getElementById("btnToggleGrafico");
    cont.classList.toggle("oculto");
    btn.textContent = cont.classList.contains("oculto") ? "▲" : "▼";
  });

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    atualizarGrafico();
  });
}

document.addEventListener("DOMContentLoaded", iniciar);