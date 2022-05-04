
import java.util.Random;
import java.util.Scanner;

public class MadLibs {

    Scanner scanner = new Scanner(System.in);
    String story;
    String name;
    String adjective1;
    String adjective2;
    String noun1;
    String noun2;
    String noun3;
    String adverb;
    String randomNumbers;
    Random random = new Random();

    // GETTERS

    public String getStory() {
        return story;
    }

    public String getName() {
        return name;
    }

    public String getAdjective1() {
        return adjective1;
    }

    public String getAdjective2() {
        return adjective2;
    }

    public String getNoun1() {
        return noun1;
    }

    public String getNoun2() {
        return noun2;
    }

    public String getNoun3() {
        return noun3;
    }

    public String getAdverb() {
        return adverb;
    }

    public String getRandomNumbers() {
        return randomNumbers;
    }

// SETTERS

    public void setStory(String story) {
        this.story = story;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAdjective1(String adjective1) {
        this.adjective1 = adjective1;
    }

    public void setAdjective2(String adjective2) {
        this.adjective2 = adjective2;
    }

    public void setNoun1(String noun1) {
        this.noun1 = noun1;
    }

    public void setNoun2(String noun2) {
        this.noun2 = noun2;
    }

    public void setNoun3(String noun3) {
        this.noun3 = noun3;
    }

    public void setAdverb(String adverb) {
        this.adverb = adverb;
    }

    public void setRandomNumbers() {
        int num = Math.abs(random.nextInt()) % 100;
        int index = 0;
        int[] numberHolder = new int[3];

        while(index < numberHolder.length)
        {
            numberHolder[index] = num + index;
            index++;
        }
        randomNumbers = "not " + numberHolder[0] + ", not " + numberHolder[1] + ", but " + numberHolder[2];
    }

    // Print instructions to player

    public void printInstructions() {
        System.out.println("***************************");
        System.out.println("Welcome to MadLibs!");
        System.out.println("If you type in words, we'll give you a story!");
        System.out.println("Start by typing in a name: ");

    }

    // Get input from User/player

    public void enterName() {
        setName(scanner.nextLine());
    }

    public void enterNoun1() {
        System.out.println("Enter a noun (person, place, or thing): ");
        setNoun1(scanner.nextLine());
    }

    public void enterNoun2() {
        System.out.println("Enter another noun (person, place, or thing): ");
        setNoun2(scanner.nextLine());
    }

    public void enterNoun3() {
        System.out.println("Enter a final noun (person, place, or thing): ");
        setNoun3(scanner.nextLine());
    }

    public void enterAdjective1()
    {
        System.out.println("Enter an adjective (descriptive word): ");
        setAdjective1(scanner.nextLine());
    }

    public void enterAdjective2()
    {
        System.out.println("Enter another adjective (descriptive word): ");
        setAdjective2(scanner.nextLine());
    }

    public void enterAdverb()
    {
        System.out.println("Enter an adverb (ie quickly, clumsily, valiantly: ");
        setAdverb(scanner.nextLine());
    }

    public void putTogetherTheStory() {

        String story;
        int num = Math.abs(random.nextInt()) % 2;
        if( num == 0 )
        {
            story = "Jesse and her best friend " + getName() + " went to Disney World today! "
                    + "They saw a " + getNoun1() + " in a show at the Magic Kingdom "
                    + "and ate a " + getAdjective1() + " feast for dinner. The next day I ran "
                    + getAdverb() + " to meet Mickey Mouse in his " + getNoun2() + " "
                    + getAdjective2() + " fireworks shooting from the " + getNoun3()
                    + ".";
        }
        else
        {
            story = "Amanda and her frenemy " + getName() + " went to the zoo last summer. "
                    + "They saw a huge " + getNoun1() + " and a tiny little " + getNoun2() + ". That night "
                    + "they decided to climb " + getAdverb() + " into the " + getNoun3() + " to get a closer look. "
                    + "The zoo was " +getAdjective1() + " at night, but they didn't care... "
                    + "Until " + getRandomNumbers() + " " + getAdjective2() + " apes yelled in their faces, making "
                    + "Amanda and " + getName() + " sprint all the way home.";
        }
        setStory(story);


    }

    public void play()
    {
        enterName();
        enterNoun1();
        enterAdjective1();
        enterNoun2();
        enterAdverb();
        enterNoun3();
        enterAdjective2();
        setRandomNumbers();
        putTogetherTheStory();
        System.out.println(getStory());
    }

    public static void main(String[] args) {
        MadLibs game = new MadLibs();
        game.printInstructions();
        game.play();
    }
}
