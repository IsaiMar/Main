using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Target : MonoBehaviour
{
    public GameManager gameManager;

    public GameManager GameManager { get => gameManager; set => gameManager = value; }

    // Start is called before the first frame update
    void Start()
    {
        GameManager = GameObject.Find("GameManger").GetComponent<GameManager>();

        Destroy(gameObject, 2f);
    }

    // Update is called once per frame
    void Update()
    {
      
    }
    private void OnMouseDown()
    {
        GameManager.IncrementScore();

        Destroy(gameObject);
    }
}
