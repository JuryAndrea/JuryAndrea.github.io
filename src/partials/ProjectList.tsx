import {
  GradientText,
  Section,
} from 'astro-boilerplate-components';


const ProjectList = () => (
  <section id='projects'>
    <Section
      title={
        <div className=" md:mt-0 ml:mt-0 mt-4">
        <GradientText>Projects</GradientText>
      </div>
      }
    >
      {/* <p className="text-white-600 mb-8">
        Brief introduction or description of the projects section, explaining the type of projects or the context.
      </p> */}

      <div className="flex flex-col md:flex-row gap-8">
        {/* Colonna 1: */}
        <div className="flex-1">

          <div className="relative pl-6 border-l-2 border-blue-jury mb-8">
            <div className="absolute left-[-0.55rem] w-4 h-4 border-2 border-blue-jury rounded-full bg-yellow-400"></div>
            <h4 className="text-lg font-bold text-white-800">Master Thesis</h4>
            <p className="text-sm text-gray-400 italic">Sept 2022 - Sept 2024 | Università della Svizzera italiana, Lugano (CH)</p>
            <p className="text-white-600 mt-2 text-justify text-base">
              Developed a novel approach for autonomous obstacle avoidance on nano-drones in low-visibility conditions
              using a <GradientText>sensor fusion approach</GradientText>. Focused on the <GradientText>Crazyflie 2.1 platform</GradientText>, the study
              integrated <GradientText>vision-based CNNs</GradientText> with an <GradientText>ultrasonic sensor</GradientText> to enable navigation through environments with smoke.
              A custom dataset was created through simulations in <GradientText>Webots</GradientText>, allowing for robust testing under varying visibility conditions.
              Results demonstrated that the addition of ultrasonic data improves accuracy and reliability,
              with performance tests showing minimal impact on processing speed.
              This work highlights the potential of sensor fusion for <GradientText>real-time obstacle avoidance</GradientText> on drones with limited resources.
            </p>
          </div>


          <div className="relative pl-6 border-l-2 border-blue-jury mb-8">
            <div className="absolute left-[-0.55rem] w-4 h-4 border-2 border-blue-jury rounded-full bg-yellow-400"></div>
            <h4 className="text-lg font-bold text-white-800">Graph Deep Learning</h4>
            <p className="text-sm text-gray-400 italic">Spring 2024</p>
            <p className="text-white-600 mt-2 text-justify text-base">
              Verified and replicated the results of the <GradientText>Anti-Symmetric DGN model</GradientText>, designed to enhance stability in deep graph networks
              and address the <GradientText>oversquashing problem</GradientText>. Using the <GradientText>PubMed dataset</GradientText>, the team confirmed the model's capability to maintain
              information stability and effectively handle long-range message passing, demonstrating its robustness for complex
              and large-scale graph networks.
            </p>
          </div>

          <div className="relative pl-6 border-l-2 border-blue-jury mb-8">
            <div className="absolute left-[-0.55rem] w-4 h-4 border-2 border-blue-jury rounded-full bg-yellow-400"></div>
            <h4 className="text-lg font-bold text-white-800">Knowledge Search & Extraction</h4>
            <p className="text-sm text-gray-400 italic">Fall 2023</p>
            <ul className="list-decimal list-inside text-white-600 mt-2">
              <li>
                <strong>PROJ-01</strong>
                <p className="text-white-600 mt-2 text-justify text-base">
                  Optimized search functionality in a knowledge management system by processing extensive Python codebases,
                  employing <GradientText>LSI</GradientText>, <GradientText>TF-IDF</GradientText>, and <GradientText>Doc2Vec</GradientText> models to enhance search accuracy and achieving 95% precision with the <GradientText>LSI model</GradientText>.
                  Additionally, utilized <GradientText>t-SNE</GradientText> to visualize performance and gain insights, improving the overall system’s efficiency and usability.
                </p>

              </li>
              <li className="mt-3">
                <strong>PROJ-02</strong>
                <p className="text-white-600 mt-2 text-justify text-base">
                  Developed a Python test generator leveraging <GradientText>Fuzzer</GradientText> and <GradientText>Genetic Algorithm (GA)</GradientText> techniques to enhance branch coverage,
                  and designed custom test cases to achieve strong mutation scores, significantly improving the robustness
                  and reliability of the testing process.
                </p>
              </li>
            </ul>
          </div>

          <div className="relative pl-6 border-l-2 border-blue-jury mb-8">
            <div className="absolute left-[-0.55rem] w-4 h-4 border-2 border-blue-jury rounded-full bg-yellow-400"></div>
            <h4 className="text-lg font-bold text-white-800">Advanced Topics in Machine Learning</h4>
            <p className="text-sm text-gray-400 italic">Fall 2023</p>
            <ul className="list-decimal list-inside text-white-600 mt-2">
              <li>
                <strong>PROJ-01</strong>
                <p className="text-white-600 mt-2 text-justify text-base">
                  Implemented <GradientText>PonderNet</GradientText> to dynamically adjust computational steps, balancing accuracy and efficiency.
                  Tested on <GradientText>MNIST</GradientText> and <GradientText>parity tasks</GradientText>, the model demonstrated reduced computational costs without compromising accuracy,
                  showcasing its potential for adaptive machine learning.
                </p>
              </li>
              <li className="mt-3">
                <strong>PROJ-02</strong>
                <p className="text-white-600 mt-2 text-justify text-base">
                  Developed a conversational chatbot using the <GradientText>WizardOfWikipedia dataset</GradientText>, leveraging <GradientText>Sentence Transformer</GradientText> and <GradientText>Cross-Encoder</GradientText> models.
                  Optimized knowledge retrieval and response generation with <GradientText>HNSW indexing</GradientText> for efficient similarity search and used <GradientText>GPT-2</GradientText> for nuanced reply generation.
                </p>
              </li>
            </ul>
          </div>

        </div>

        {/* Colonna 2: */}
        <div className="flex-1">

          <div className="relative pl-6 border-l-2 border-blue-jury mb-8">
            <div className="absolute left-[-0.55rem] w-4 h-4 border-2 border-blue-jury rounded-full bg-yellow-400"></div>
            <h4 className="text-lg font-bold text-white-800">Mobile & Wearable Computing</h4>
            <p className="text-sm text-gray-400 italic">Fall 2023</p>
            <p className="text-white-600 mt-2 text-justify text-base">
              Developed an <GradientText>Android app</GradientText> utilizing mobile and wearable tech to solve a targeted problem, gathering data through built-in sensors.
              The app offers <GradientText>real-time data visualization</GradientText> to enhance user decision-making. Data is stored both locally and remotely for reliability.
              Key focus areas included <GradientText>efficient data processing</GradientText> and <GradientText>user-friendly interface design</GradientText>.
            </p>
          </div>

          <div className="relative pl-6 border-l-2 border-blue-jury mb-8">
            <div className="absolute left-[-0.55rem] w-4 h-4 border-2 border-blue-jury rounded-full bg-yellow-400"></div>
            <h4 className="text-lg font-bold text-white-800">Robotics</h4>
            <p className="text-sm text-gray-400 italic">Spring 2023</p>
            <p className="text-white-600 mt-2 text-justify text-base">
              Implemented a project to map unknown environments using the <GradientText>Robomaster S1</GradientText> in <GradientText>CoppeliaSim</GradientText>,
              applying a pixel-based approach. After testing various configurations, the final setup used a single front sensor
              for efficient mapping, with walkable areas and obstacles displayed on an <GradientText>ASCII grid</GradientText> and in <GradientText>matplotlib</GradientText>.
              This solution balances precision and performance, supporting robotic navigation in unfamiliar spaces.
            </p>
          </div>

          <div className="relative pl-6 border-l-2 border-blue-jury mb-8">
            <div className="absolute left-[-0.55rem] w-4 h-4 border-2 border-blue-jury rounded-full bg-yellow-400"></div>
            <h4 className="text-lg font-bold text-white-800">Computer Vision & Pattern Recognition</h4>
            <p className="text-sm text-gray-400 italic">Spring 2023</p>
            <p className="text-white-600 mt-2 text-justify text-base">
              Developed a Computer Vision algorithm for detecting and analyzing parallel lines using <GradientText>Canny Edge detection</GradientText>, <GradientText>Hough Transform</GradientText>, and <GradientText>affine rectification</GradientText>.
              Extracted a <GradientText>3D projection matrix</GradientText> and estimated the <GradientText>fundamental matrix</GradientText> with the 8-point algorithm.
              Applied <GradientText>RQ decomposition</GradientText> and triangulation for accurate <GradientText>3D reconstruction</GradientText> from 2D images.
            </p>
          </div>


          <div className="relative pl-6 border-l-2 border-blue-jury mb-8">
            <div className="absolute left-[-0.55rem] w-4 h-4 border-2 border-blue-jury rounded-full bg-yellow-400"></div>
            <h4 className="text-lg font-bold text-white-800">Data Analytics</h4>
            <p className="text-sm text-gray-400 italic">Spring 2023</p>
            <ul className="list-decimal list-inside text-white-600 mt-2">
              <li>
                <strong>PROJ-01</strong>
                <p className="text-white-600 mt-2 text-justify text-base">
                  Analyzed sentiment in a dataset using <GradientText>recursive models</GradientText> and <GradientText>sentiment classification</GradientText>,
                  leveraging <GradientText>natural language processing</GradientText> techniques to map phrases to sentiment values.
                  Visualizations and sentiment predictions were enhanced through model selection and data preprocessing to refine accuracy.
                </p>
              </li>
              <li className="mt-3">
                <strong>PROJ-02</strong>
                <p className="text-white-600 mt-2 text-justify text-base">
                  Clustered New York real estate data by borough using <GradientText>K-means</GradientText> and <GradientText>spectral clustering</GradientText> to assess sale prices based
                  on features like square footage, sale date, and tax class.
                  Employed <GradientText>PCA</GradientText> for dimensionality reduction, achieving clearer patterns and insights into property value distribution.
                </p>
              </li>
            </ul>
          </div>


          <div className="relative pl-6 border-l-2 border-blue-jury mb-8">
            <div className="absolute left-[-0.55rem] w-4 h-4 border-2 border-blue-jury rounded-full bg-yellow-400"></div>
            <h4 className="text-lg font-bold text-white-800">Edge Computing in the IoT</h4>
            <p className="text-sm text-gray-400 italic">Fall 2022</p>
            <p className="text-white-600 mt-2 text-justify text-base">
              Developed a room security system utilizing <GradientText>motion sensors</GradientText>, <GradientText>fingerprint recognition</GradientText>, and a <GradientText>camera</GradientText> to detect intrusions
              and trigger alarms. Built on an <GradientText>Arduino platform</GradientText>, the system enables <GradientText>real-time monitoring</GradientText> and can be deactivated
              by an authorized fingerprint or exit detection. Designed for affordability and <GradientText>energy efficiency</GradientText>,
              it offers customization potential for future applications.
            </p>
          </div>

        </div>
      </div>
    </Section>
  </section>
);

export { ProjectList };
