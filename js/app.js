function average(arr) {
  let sum = 0;

  // Boucle à travers les éléments du tableau pour additionner les valeurs
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  // Retourne la somme divisée par le nombre d'éléments dans le tableau
  return sum / arr.length;
}

const apiUrl =
  "https://public.opendatasoft.com/api/records/1.0/search/?dataset=prix_des_carburants_j_7&q=&facet=cp&facet=pop&facet=city&facet=automate_24_24&facet=fuel&facet=shortage&facet=update&facet=services&facet=brand&refine.pop=R";

fetch(apiUrl) //Récupere les données de l'API
  .then((res) => res.json()) // Permet de lire le fichier.json
  .then((data) => {
    console.log(data);
    const ctx = document.getElementById("prixVille").getContext("2d");
    const mid = document.getElementById("midPrice").getContext("2d");
    const nbs = document.getElementById("nbStation").getContext("2d");
    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          data.records[0].fields.city,
          data.records[1].fields.city,
          data.records[2].fields.city,
          data.records[3].fields.city,
          data.records[4].fields.city,
          data.records[5].fields.city,
        ],
        datasets: [
          {
            label: "Prix du gazole",
            data: [
              data.records[0].fields.price_gazole,
              data.records[1].fields.price_gazole,
              data.records[2].fields.price_gazole,
              data.records[3].fields.price_gazole,
              data.records[4].fields.price_gazole,
              data.records[5].fields.price_gazole,
            ], // Les données seront remplies lorsque la première requête à l'API sera effectuée
            backgroundColor: [
              "rgba(171, 58, 183, 0.6)",
              "rgba(127, 58, 183, 0.6)",
              "rgba(84, 58, 183, 0.6)",
              "rgba(116, 108, 235, 0.6)",
              "rgba(58, 112, 183, 0.6)",
              "rgba(0, 172, 193, 0.6)",
              "rgba(58, 183, 183, 0.6)",
            ],
            borderColor: [
              "rgba(171, 58, 183,1.0)",
              "rgba(127, 58, 183,1.0)",
              "rgba(84, 58, 183,1.0)",
              "rgba(116, 108, 235,1.0)",
              "rgba(58, 112, 183,1.0)",
              "rgba(0, 172, 193,1.0)",
              "rgba(58, 183, 183,1.0)",
            ],
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
    const priceGazole = [
      data.records[0].fields.price_gazole,
      data.records[1].fields.price_gazole,
      data.records[2].fields.price_gazole,
      data.records[3].fields.price_gazole,
      data.records[4].fields.price_gazole,
      data.records[5].fields.price_gazole,
    ];
    const priceSp95 = [
      data.records[1].fields.price_sp95,
      data.records[2].fields.price_sp95,
      data.records[3].fields.price_sp95,
      data.records[4].fields.price_sp95,
      data.records[5].fields.price_sp95,
    ];
    const priceSp98 = [
      data.records[1].fields.price_sp98,
      data.records[2].fields.price_sp98,
      data.records[3].fields.price_sp98,
      data.records[4].fields.price_sp98,
      data.records[9].fields.price_sp98,
    ];
    const priceE10 = [
      data.records[5].fields.price_e10,
      data.records[9].fields.price_e10,
    ];
    const midPrice = new Chart(mid, {
      type: "bar",
      data: {
        labels: [
          data.facet_groups[5].facets[5].name,
          data.facet_groups[5].facets[2].name,
          data.facet_groups[5].facets[4].name,
          data.facet_groups[5].facets[3].name,
        ],
        datasets: [
          {
            label: "Moyennes des prix carburants",
            data: [
              average(priceGazole),
              average(priceSp95),
              average(priceSp98),
              average(priceE10),
            ], // Les données seront remplies lorsque la première requête à l'API sera effectuée
            backgroundColor: [
              "rgba(0,191,255, 0.6)",
              "rgba(30,144,255, 0.6)",
              "rgba(0,0,255, 0.6)",
              "rgba(70,130,180, 0.6)",
            ],
            borderColor: [
              "rgba(0,191,255,1.0)",
              "rgba(30,144,255,1.0)",
              "rgba(0,0,255,1.0)",
              "rgba(70,130,180,1.0)",
            ],
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
    const service = new Chart(document.getElementById("service"), {
      type: "radar",
      data: {
        labels: [
          data.facet_groups[7].facets[0].name,
          data.facet_groups[7].facets[1].name,
          data.facet_groups[7].facets[3].name,
          data.facet_groups[7].facets[6].name,
          data.facet_groups[7].facets[7].name,
          data.facet_groups[7].facets[8].name,
          data.facet_groups[7].facets[9].name,
          data.facet_groups[7].facets[10].name,
          data.facet_groups[7].facets[14].name,
          data.facet_groups[7].facets[11].name,
          data.facet_groups[7].facets[12].name,
          data.facet_groups[7].facets[13].name,
        ],
        datasets: [
          {
            label: "Blois",
            data: [1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1], // Les données seront remplies lorsque la première requête à l'API sera effectuée
            backgroundColor: ["rgba(171, 58, 183, 0.4)"],
            borderColor: ["rgba(171, 58, 183, 1.0)"],
            borderWidth: 1,
          },
          {
            label: data.records[3].fields.city,
            data: [1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1],
            backgroundColor: ["rgba(127, 58, 183, 0.4)"],
            borderColor: ["rgba(127, 58, 183, 1.0)"],
            borderWidth: 1,
          },
          {
            label: data.records[9].fields.city,
            data: [1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1],
            backgroundColor: ["rgba(84, 58, 183, 0.4)"],
            borderColor: ["rgba(84, 58, 183, 1.0)"],
            borderWidth: 1,
          },
          {
            label: data.records[4].fields.city,
            data: [1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
            backgroundColor: ["rgba(116, 108, 235, 0.4)"],
            borderColor: ["rgba(116, 108, 235, 1.0)"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            angleLines: {
              display: false,
            },
            suggestedMin: 0,
            suggestedMax: 1,
          },
        },
      },
    });
    const station = new Chart(nbs, {
      type: "doughnut",
      data: {
        labels: [
          data.facet_groups[8].facets[0].name,
          data.facet_groups[8].facets[1].name,
          data.facet_groups[8].facets[2].name,
          data.facet_groups[8].facets[3].name,
          data.facet_groups[8].facets[4].name,
          data.facet_groups[8].facets[5].name,
        ],
        datasets: [
          {
            label: "Ventes",
            data: [
              data.facet_groups[8].facets[0].count,
              data.facet_groups[8].facets[1].count,
              data.facet_groups[8].facets[2].count,
              data.facet_groups[8].facets[3].count,
              data.facet_groups[8].facets[4].count,
              data.facet_groups[8].facets[5].count,
            ],
            backgroundColor: [
              "rgba(171, 58, 183, 0.6)",
              "rgba(127, 58, 183, 0.6)",
              "rgba(84, 58, 183, 0.6)",
              "rgba(116, 108, 235, 0.6)",
              "rgba(58, 112, 183, 0.6)",
              "rgba(0, 172, 193, 0.6)",
              "rgba(58, 183, 183, 0.6)",
            ],
            borderColor: [
              "rgba(171, 58, 183, 1.0)",
              "rgba(127, 58, 183, 1.0)",
              "rgba(84, 58, 183, 1.0)",
              "rgba(116, 108, 235, 1.0)",
              "rgba(58, 112, 183, 1.0)",
              "rgba(0, 172, 193, 1.0)",
              "rgba(58, 183, 183, 1.0)",
            ],
            borderWidth: 2,
            pointLabelFontColor: "rgba(255, 255, 255)",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  })

  .catch((error) => {
    console.error(error);
  });
