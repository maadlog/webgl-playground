class NormalsTree extends Tree {
    getColorsArray() {
        const normals = [
            0.01023745,    -0.9724923,    0.2327102,  1.0,
            -0.1325602,    0.591951,    -0.794998,  1.0,
            -0.4568241,    -0.8105035,    0.3666004,  1.0,
            0.1815762,    0.9488869,    -0.2581545, 1.0,
            -0.3285136,    -0.9436464,    0.04012754, 1.0,
            0.7988998,    0.562716,    -0.2123909,  1.0,
            -0.3019404,    -0.9306212,    -0.2068238, 1.0,
            0.6404216,    0.7389225,    0.2094131,  1.0,
            -0.07415063,    -0.8682719,    -0.4905156,  1.0,
            0.2805853,    0.7409087,    0.6101854,  1.0,
            0.234749,    -0.8827561,    -0.4069822, 1.0,
            -0.1899323,    0.7194856,    0.6680316, 1.0,
            0.2364509,    -0.9635733,    -0.1249696,  1.0,
            -0.5054041,    0.7406413,    0.4427384, 1.0,
            0.1623797,    -0.9837714,    0.07633181,  1.0,
            -0.6671034,    0.7433308,    -0.04931922, 1.0,
            0.2581211,    -0.900976,    0.3487345,  1.0,
            -0.48664,    0.732281,    -0.4763885, 1.0,
            -0.1737527,    -0.6778425,    -0.7143805, 1.0,
            0.205402,    -0.6959016,    -0.6881359, 1.0,
            0.5725008,    -0.7490286,    -0.3334651,  1.0,
            0.6761177,    -0.7144883,    0.1799206, 1.0,
            0.4694948,    -0.671558,    0.5732228,  1.0,
            -0.1085285,    -0.7058733,    0.6999745,  1.0,
            -0.5174872,    -0.6855163,    0.5121273,  1.0,
            -0.7425975,    -0.6603743,    0.111601, 1.0,
            -0.5624405,    -0.6941006,    -0.4493163, 1.0,
            -0.1257113,    -0.7276294,    -0.6743529, 1.0,
            0.05208985,    -0.7044002,    -0.7078891, 1.0,
            0.4486764,    -0.8402932,    -0.3042972,  1.0,
            0.6131495,    -0.7789459,    0.1314955, 1.0,
            0.6088571,    -0.6458079,    0.4606791, 1.0,
            -0.1912099,    -0.8001665,    0.5684824,  1.0,
            -0.4856388,    -0.7426244,    0.4611552,  1.0,
            -0.7233229,    -0.6374935,    0.2653413,  1.0,
            -0.4458976,    -0.7805577,    -0.4380696, 1.0,
            0.1280251,    -0.7234592,    -0.6783925,  1.0,
            0.4957522,    -0.807468,    -0.319727,  1.0,
            0.6300147,    -0.7614307,    0.1526589, 1.0,
            0.5219505,    -0.6870118,    0.5055518, 1.0,
            -0.1280372,    -0.7719585,    0.6226448,  1.0,
            -0.4874511,    -0.7322678,    0.4755791,  1.0,
            -0.714086,    -0.676549,    0.1798965,  1.0,
            -0.497583,    -0.7559165,    -0.4254427,  1.0,
            -0.1473377,    -0.7206769,    -0.6774337, 1.0,
            0.1902045,    -0.7218184,    -0.6654325,  1.0,
            0.5419132,    -0.7833569,    -0.3044374,  1.0,
            0.643816,    -0.7426189,    0.1844404,  1.0,
            0.4701771,    -0.691051,    0.5489826,  1.0,
            -0.1258651,    -0.7415916,    0.6589384,  1.0,
            -0.5108147,    -0.7144777,    0.4781106,  1.0,
            -0.722851,    -0.680018,    0.1227265,  1.0,
            -0.5223403,    -0.7294717,    -0.4416237, 1.0,
            -0.1445261,    -0.7057459,    -0.6935669, 1.0,
            0.1523281,    -0.7101567,    -0.6873671,  1.0,
            0.5235359,    -0.7715983,    -0.3613119,  1.0,
            0.6594324,    -0.7376157,    0.1451616, 1.0,
            0.4908584,    -0.6882166,    0.5342433, 1.0,
            -0.0876098,    -0.7341318,    0.6733313,  1.0,
            -0.4847845,    -0.7085962,    0.5127137,  1.0,
            -0.7223781,    -0.6765763,    0.1428786,  1.0,
            -0.5513982,    -0.7194369,    -0.4223394, 1.0,
            -0.1866286,    -0.6988704,    -0.6904708, 1.0,
            0.3856353,    -0.6451226,    -0.6596228,  1.0,
            0.5443299,    -0.774071,    -0.323294,  1.0,
            0.5379269,    -0.8404729,    0.06511554,  1.0,
            0.283685,    -0.7351127,    0.6157372,  1.0,
            0.0455626,    -0.758895,    0.6496171,  1.0,
            -0.2476753,    -0.8074731,    0.5353915,  1.0,
            -0.7647744,    -0.6426874,    -0.04552809,  1.0,
            -0.6254094,    -0.7387339,    -0.2512677, 1.0,
            -0.3621522,    -0.7856903,    -0.5015342, 1.0,
            0.2928424,    -0.6835878,    -0.6685439,  1.0,
            0.5400766,    -0.7556545,    -0.370545, 1.0,
            0.5770961,    -0.8106351,    0.09915058,  1.0,
            0.3393001,    -0.7414247,    0.5789343, 1.0,
            0.01839068,    -0.7453839,    0.6663817,  1.0,
            -0.3013803,    -0.7706181,    0.5615316,  1.0,
            -0.7194507,    -0.6921268,    0.0578892,  1.0,
            -0.6206783,    -0.730697,    -0.2843243,  1.0,
            -0.3431942,    -0.7568451,    -0.5562403, 1.0,
            0.2436486,    -0.6805804,    -0.6909745,  1.0,
            0.5452524,    -0.7331839,    -0.4063756,  1.0,
            0.617497,    -0.7820883,    0.08387684, 1.0,
            0.3963845,    -0.7308656,    0.555621,  1.0,
            0.05799704,    -0.720664,    0.6908543, 1.0,
            -0.3310921,    -0.7383984,    0.587491, 1.0,
            -0.7160721,    -0.6875425,    0.1205243,  1.0,
            -0.6490113,    -0.7091711,    -0.275428,  1.0,
            -0.3492962,    -0.7282506,    -0.5896128, 1.0,
            0.2487402,    -0.7033216,    -0.6659332,  1.0,
            0.5442013,    -0.7507507,    -0.3744574,  1.0,
            0.5934772,    -0.794714,    0.1273357,  1.0,
            0.3569175,    -0.747141,    0.5607052,  1.0,
            0.03028824,    -0.739632,    0.6723296, 1.0,
            -0.3549491,    -0.7562449,    0.5496407,  1.0,
            -0.6967885,    -0.7103319,    0.09957135, 1.0,
            -0.6194436,    -0.7279927,    -0.2937964, 1.0,
            -0.3092686,    -0.7444403,    -0.5917446, 1.0,
            0.5707449,    -0.7098922,    -0.4126784,  1.0,
            0.649318,    -0.753504,    0.1030433, 1.0,
            0.415828,    -0.7101982,    0.5680718,  1.0,
            0.05367243,    -0.6968185,    0.7152366,  1.0,
            -0.3677812,    -0.7096967,    0.6008889,  1.0,
            -0.7274953,    -0.6718187,    0.1393205,  1.0,
            -0.6636879,    -0.6857233,    -0.2988344, 1.0,
            -0.3436224,    -0.699189,    -0.6269436,  1.0,
            0.234426,    -0.6655474,    -0.7085838, 1.0,
            0.7510268,    -0.6532866,    0.09578782,  1.0,
            0.5781819,    -0.7770198,    0.2488898, 1.0,
            0.3687138,    -0.7334243,    0.5710858, 1.0,
            -0.4168654,    -0.6373021,    0.6481275,  1.0,
            -0.7190195,    -0.6666683,    0.196378, 1.0,
            -0.698662,    -0.7153074,    -0.01437552, 1.0,
            -0.6867898,    -0.6660613,    -0.2910018, 1.0,
            -0.3398555,    -0.7134342,    -0.6127887, 1.0,
            0.5890267,    -0.6195254,    -0.5188795,  1.0,
            0.0477262,    -0.9181592,    -0.3933268,  1.0,
            -0.1186299,    0.1731764,    -0.9777203,  1.0,
            0.7197996,    -0.1695822,    -0.6731495,  1.0,
            0.2160921,    0.9183029,    -0.3316986, 1.0,
            0.8824413,    -0.4680131,    -0.0475501,  1.0,
            0.9422612,    0.1731725,    -0.2866268, 1.0,
            0.7065397,    -0.4680249,    0.5308052, 1.0,
            0.8117886,    0.4704509,    0.3459411,  1.0,
            0.2000351,    -0.4680335,    0.8607733, 1.0,
            0.3994705,    0.4704419,    0.7868339,  1.0,
            -0.4000667,    -0.4680294,    0.787969, 1.0,
            -0.1997335,    0.4704377,    0.8595318, 1.0,
            -0.8129785,    -0.4680211,    0.3464424,  1.0,
            -0.705502,    0.4704503,    0.5300409,  1.0,
            -0.8454725,    -0.4680113,    -0.2571803, 1.0,
            -0.881149,    0.4704485,    -0.0474831, 1.0,
            -0.5379672,    -0.1695858,    -0.825731,  1.0,
            -0.644493,    0.4704506,    -0.602748,  1.0,
            0.000003600544,    0.001944267,    -0.9999982,  1.0,
            0.6428248,    0.001944196,    -0.7660108, 1.0,
            0.9848069,    0.001944166,    -0.1736422, 1.0,
            0.8660128,    0.001944201,    0.5000181,  1.0,
            0.341978,    0.001944188,    0.9397059, 1.0,
            -0.3420532,    0.001944206,    0.9396786, 1.0,
            -0.866053,    0.00194421,    0.4999485, 1.0,
            -0.984794,    0.001944176,    -0.1737151, 1.0,
            -0.6427664,    0.001944183,    -0.7660597,  1.0,
        ];
        return normals;
    }
}
