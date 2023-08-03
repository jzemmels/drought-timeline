export default {
    timelineEvents: [
      {
        id: '1922', // Unique id for annotation - order and # value don't matter - annotations are later sorted by start_date
        title: 'How to read the timeline',
        start_date: '1920-04-01', // Date marking start of annotation. Determines y trigger start position on deskop and order
        end_date: '1928-12-31', // Date marking end of annotation. Determines y trigger end position on deskop
        text: 'Each bar represents one of the 2000 most severe streamflow drought events measured at a USGS  streamgage. The taller the bar, the longer the drought. Where the chart is wider, many streamgages were experiencing drought simultaneously.', // Narrative text
        image_alt: 'A hydrologic technician from the USGS Idaho Water Science Center measures streamflow in Lightning Creek at Clark Fork, ID. The riverbed is almost completely dry, showing exposed rocks. The technician stands on the dry riverbed, measuring a small trickle of water through the rocks. The background shows a bridge and surrounding forest.',
      },
      {
        id: '1930', // Unique id for annotation - order and # value don't matter - annotations are later sorted by start_date
        title: 'Dust Bowl (1930 - 1941)',
        start_date: '1930-01-01', // Date marking start of annotation. Determines y trigger start position on deskop and order
        end_date: '1943-08-31', // Date marking end of annotation. Determines y trigger end position on deskop
        text: 'Drought hit most of the U.S. in the 1930s, but the farmers and ranchers of the Great Plains were hit hardest. Not enough rain combined with too much farming and grazing made the top layer of soil loose and dry. Heavy winds blew the dry soil into massive dust storms, which is why we call this period in history the “dust bowl.” The drought ended in 1941, but the lessons learned from the dust bowl continue to shape the farming and grazing practices we use today. </a>', // Narrative text
        image_alt: 'Results of a dust storm in Cimarron County, Oklahoma, in 1936. A dilapidated wooden building and parts of a wagon sit buried in dust after a dust storm, with bare trees and a windmill in the background.', // alt text for image
      },
      {
        id: '1952',
        title: '1950s Drought (1952 - 1957)',
        start_date: '1952-11-01',
        end_date: '1959-08-31',
        text: 'The drought of the 1950s was the biggest in terms of area of land affected. About 80% of hydrologic units (areas of connected streams) received less than half the normal amount of precipitation (<a href="https://doi.org/10.1002/joc.7904" target="_blank">McCabe et al. 2022</a>). The lessons learned from the dust bowl helped people prepare for and respond to the drought, but farmers and ranchers still experienced great hardship, especially in already dry areas like Texas. Texas developed its modern approach to water planning because of how badly the 1950s drought hurt its rural communities.',
        image_alt: 'Deep cracks run through a large area of dry earth, with trees and a rocky plateau in the distance.',
      },
      {
        id: '1962',
        title: '1960s Drought (1962 - 1968)',
        start_date: '1962-12-01',
        end_date: '1970-10-31',
        text: 'The 1960s drought was the most severe drought to hit the northeastern U.S. in the last 100 years. The northeastern states did not have experience with droughts, so their emergency reserves of water were not large enough to cover a long dry period. As the region drained its water reserves, the concentration of hazardous pollutants in the water went up, making the remaining water less safe to use. The northeastern states and federal agencies worked together to develop new water conservation and management policies, which provided some relief until the rains returned.',
        image_alt: 'A large area of shoreline is exposed in a reservoir in Massachusetts, revealing old tree stumps and other debris. A sign on the shore reads, “Elevation 498.17,” and trees and hills are visible in the distance.',
      },
      {
        id: '1987',
        title: '1980s Drought (1987 - 1992)',
        start_date: '1987-05-01',
        end_date: '1994-10-31',
        text: 'This drought affected areas from northern Minnesota to southern California. In the summer of 1988, streamflow in the Mississippi River was so low that barges could not go up and down the lower section of the river. That same summer, wildfires burned 36% of Yellowstone National Park, triggering the largest fire-fighting effort in the U.S. at that time. A study in 1989 called for better climate data and predictions to help people prepare for and respond to drought (<a href="https://doi.org/10.1175/1520-0477(1989)070%3C1092:TDBAD%3E2.0.CO;2" target="_blank">Changnon 1989</a>). To this day, USGS scientists are working hard to address that need (<a href="https://www.usgs.gov/mission-areas/water-resources/science/drought-prediction-science" target="_blank">Drought Prediction Science Website</a>).',
        image_alt: 'People explore the wreckages of wooden-hulled boats exposed by low water levels in the Mississippi River. The river is visible in the distance, along with a bridge and a shoreline with buildings and trees.',
      },
      {
        id: '1999',
        title: 'Turn-of-the-Century (1999 - 2015)',
        start_date: '1999-09-01',
        end_date: '2017-09-30',
        text: 'This was one of the worst droughts to hit the southwestern U.S. in the last 1200 years. Like previous droughts, low amounts of rain led to big drops in available water. But high temperatures drove the loss of soil moisture during this most recent drought (<a href="https://doi.org/10.1002/joc.7904" target="_blank">McCabe et al. 2022</a>). The national-level drought event ended in 2015, but the turn-of-the-century drought in the southwestern U.S. has continued, earning it the title of “megadrought.” The USGS is working with partners to understand this ongoing megadrought and to predict and communicate drought risk (<a href="https://www.usgs.gov/media/videos/image-week-lake-powell-and-megadrought" target="_blank">Video of drought at Lake Powell</a>).',
        image_alt: 'Extremely low water levels in a lake in California leave wooden floating docks stranded on land, far from the edge of the water. A small amount of water is visible beyond the shoreline, and trees cover the hills on the other side of the lake.',
      }      
    ]
};