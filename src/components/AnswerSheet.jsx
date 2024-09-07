const AnswerSheet = ({isActive,closeSideBar}) => {


    if(!isActive) return(<></>)

    return ( <>
    <div className="overlay">
    <div className="simulator-answer-sheet">
            
            <div className="answer-sheet-titles">
                <p>Avance de preguntas</p>
                <img 
                onClick={()=>{
                    closeSideBar()
                }}
                src="/icons/left-arrow.png" alt="" />
            </div>
            <div className="answers-sheet-items">
              <div className="item selected">1</div>
              <div className="item selected">2</div>
              <div className="item selected">3</div>
              <div className="item selected">4</div>
              <div className="item">5</div>
              <div className="item selected">6</div>
              <div className="item">7</div>
              <div className="item">8</div>
              <div className="item">9</div>
              <div className="item">10</div>
              <div className="item">11</div>
              <div className="item">12</div>
              <div className="item">13</div>
              <div className="item">14</div>
              <div className="item">15</div>
              <div className="item">16</div>
              <div className="item">17</div>
              <div className="item">18</div>
              <div className="item">19</div>
              <div className="item">20</div>
              <div className="item">21</div>
              <div className="item">22</div>
              <div className="item">23</div>
              <div className="item">24</div>
              <div className="item">25</div>
              <div className="item">26</div>
              <div className="item">27</div>
              <div className="item">28</div>
              <div className="item">29</div>
              <div className="item">30</div>
              <div className="item">31</div>
              <div className="item">32</div>
              <div className="item">33</div>
              <div className="item">34</div>
              <div className="item">35</div>
              <div className="item">36</div>
              <div className="item">37</div>
              <div className="item">38</div>
              <div className="item">39</div>
              <div className="item">40</div>
              <div className="item">41</div>
              <div className="item">42</div>
              <div className="item">43</div>
              <div className="item">44</div>
              <div className="item">45</div>
              <div className="item">46</div>
              <div className="item">47</div>
              <div className="item">48</div>
              <div className="item">49</div>
              <div className="item">50</div>
              <div className="item">51</div>
              <div className="item">52</div>
              <div className="item">53</div>
              <div className="item">54</div>
              <div className="item">55</div>
              <div className="item">56</div>
              <div className="item">57</div>
              <div className="item">58</div>
              <div className="item">59</div>
              <div className="item">60</div>
              <div className="item">61</div>
              <div className="item">62</div>
              <div className="item">63</div>
              <div className="item">64</div>
              <div className="item">65</div>
              <div className="item">66</div>
              <div className="item">67</div>
              <div className="item">68</div>
              <div className="item">69</div>
              <div className="item">70</div>
              <div className="item">71</div>
              <div className="item">72</div>
              <div className="item">73</div>
              <div className="item">74</div>
              <div className="item">75</div>
              <div className="item">76</div>
              <div className="item">77</div>
              <div className="item">78</div>
              <div className="item">79</div>
              <div className="item">80</div>
              <div className="item">81</div>
              <div className="item">82</div>
              <div className="item">83</div>
              <div className="item">84</div>
              <div className="item">85</div>
              <div className="item">86</div>
              <div className="item">87</div>
              <div className="item">88</div>
              <div className="item">89</div>
              <div className="item">90</div>
              <div className="item">91</div>
              <div className="item">92</div>
              <div className="item">93</div>
              <div className="item">94</div>
              <div className="item">95</div>
              <div className="item">96</div>
              <div className="item">97</div>
              <div className="item">98</div>
              <div className="item">99</div>
              <div className="item">100</div>
              <div className="item">101</div>
              <div className="item">102</div>
              <div className="item">103</div>
              <div className="item">104</div>
              <div className="item">105</div>
              <div className="item">106</div>
              <div className="item">107</div>
              <div className="item">108</div>
              <div className="item">109</div>
              <div className="item">110</div>
              <div className="item">111</div>
              <div className="item">112</div>
              <div className="item">113</div>
              <div className="item">114</div>
              <div className="item">115</div>
              <div className="item">116</div>
              <div className="item">117</div>
              <div className="item">118</div>
              <div className="item">119</div>
              <div className="item">120</div>
            </div>
          </div>
    </div>

    
    </> );
}
 
export default AnswerSheet;