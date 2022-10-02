using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Random = UnityEngine.Random;
using UnityEngine.UI;

public class GameManager : MonoBehaviour
{
    public GameObject target;

    public GameObject winText;
    int score = 0;
    public text scoreText;
    bool win = false;

    // Start is called before the first frame update
    void Start()
    {
        //Spawn();
        InvokeRepeating("Spawn", 1f, 2f);

    }

    // Update is called once per frame
    void Update()
    {
        if (win == true)
        {
            CancelInvoke("Spawn");
        }
    }

    void Spawn()
    {
        float randomX = Random.Range(-7f, 7f);
        float randomY = Random.Range(-2.2f, 3.5f);

        Vector3 randomPosition = new Vector3(randomX, randomY, 0);

        Instantiate(target, randomPosition, Quaternion.identity);

    }
    
    public void IncrementScore()
    {
        score++;
        print(score);

        scoreText.text = score.ToString();

        if(score >= 10)
        {
            win= true;

            winText.SetActive(true);
        }
    }
}
