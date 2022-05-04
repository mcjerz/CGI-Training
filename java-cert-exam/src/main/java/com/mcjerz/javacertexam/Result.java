package com.mcjerz.javacertexam;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Result
{

    /*
     * Complete the 'solve' function below.
     *
     * The function accepts following parameters:
     *  1. DOUBLE meal_cost
     *  2. INTEGER tip_percent
     *  3. INTEGER tax_percent
     */

    public static void solve(double meal_cost, int tip_percent, int tax_percent) {

        Double mealTotal =
                meal_cost
                        + ((tip_percent / 100) * meal_cost)
                        + ((tax_percent / 100) * meal_cost);

        System.out.println(mealTotal);
    }

}

