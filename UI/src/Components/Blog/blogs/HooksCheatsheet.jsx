import React, { useState } from "react";
import "../blog.css";
const filterList = {
	16: "React 16",
	17: "React 17",
	18: "React 18",
	most: "Most Frequently Used",
	frequent: "Frequently Used",
	less: "Less Frequently Used",
	rarely: "Rarely Used ",
	basic: "Basic Hooks",
	intermediate: "Intermediate Hooks",
	advanced: "Advanced Hooks",
};
const filterData = {
	version: [
		{ value: "16", name: "React 16" },
		{ value: "17", name: "React 17" },
		{ value: "18", name: "React 18" },
	],
	usability: [
		{ value: "most", name: "Most Frequently Used" },
		{ value: "frequent", name: "Frequently Used" },
		{ value: "less", name: "Less Frequently Used" },
		{ value: "rarely", name: "Rarely Used " },
	],
	purpose: [
		{ value: "basic", name: "Basic Hooks" },
		{ value: "intermediate", name: "Intermediate Hooks" },
		{ value: "advanced", name: "Advanced Hooks" },
	],
};

const Filter = ({ filterFunc }) => {
	const [expandedFilter, setExpandedFilter] = useState(null);
	const [selectedFilter, setSelectedFilter] = useState({
		version: "",
		usability: "",
		purpose: "",
	});

	const handleFilterClick = (filter) => {
		setExpandedFilter(expandedFilter === filter ? null : filter);
	};

	const handleSelectChange = (event) => {
		const data = {
			...selectedFilter,
			[expandedFilter]: event.target.value,
		};
		setExpandedFilter(null);
		setSelectedFilter(data);
		filterFunc(data);
	};
	const selectDropDown = () => {
		const options = filterData[expandedFilter];
		return (
			<div className="dropdown-container">
				<select onChange={handleSelectChange} value={selectedFilter[expandedFilter]} defaultValue={expandedFilter}>
					{options.map((val) => {
						return <option value={val.value}>{val.name}</option>;
					})}
				</select>
				<span onClick={() => setExpandedFilter(null)} className="closeDropDown">
					&#10008;
				</span>
			</div>
		);
	};

	return (
		<div className="filter-container">
			<div className={`filter-box ${expandedFilter ? "expanded" : ""}`}>
				{!expandedFilter && (
					<>
						<div className="filter-part" onClick={() => handleFilterClick("version")}>
							{selectedFilter.version && <div className="selected-filter">{filterList[selectedFilter.version]}</div>}
							<div className="select-filter">Version</div>
						</div>
						<div className="filter-part" onClick={() => handleFilterClick("usability")}>
							{selectedFilter.usability && (
								<div className="selected-filter">{filterList[selectedFilter.usability]}</div>
							)}
							<div className="select-filter">Usability</div>
						</div>
						<div className="filter-part" onClick={() => handleFilterClick("purpose")}>
							{selectedFilter.purpose && <div className="selected-filter">{filterList[selectedFilter.purpose]}</div>}
							<div className="select-filter">Purpose</div>
						</div>
					</>
				)}
				{expandedFilter && selectDropDown()}
			</div>
		</div>
	);
};

const nodes = [
	{
		id: 1,
		title: "State Hooks",
		children: [
			{
				id: 11,
				title: "useState",
				version: "16",
				usability: "most",
				purpose: "basic",
				depth: 2,
			},
			{
				id: 12,
				title: "useReducer",
				version: "16",
				usability: "frequent",
				purpose: "intermediate",
				depth: 2,
			},
		],
		depth: 1,
	},
	{
		id: 2,
		title: "Context Hooks",
		children: [
			{
				id: 21,
				title: "useContext",
				version: "16",
				usability: "frequent",
				purpose: "basic",
				depth: 2,
			},
		],
		depth: 1,
	},
	{
		id: 3,
		title: "Ref Hooks",
		children: [
			{
				id: 31,
				title: "useRef",
				version: "16",
				usability: "most",
				purpose: "basic",
				depth: 2,
			},
			{
				id: 32,
				title: "useImperativeHandle",
				version: "16",
				usability: "less",
				purpose: "advanced",
				depth: 2,
			},
		],
		depth: 1,
	},
	{
		id: 4,
		title: "Effect Hooks",
		children: [
			{
				id: 41,
				title: "useEffect",
				version: "16",
				usability: "most",
				purpose: "basic",
				depth: 2,
			},
			{
				id: 42,
				title: "useLayoutEffect",
				version: "16",
				usability: "less",
				purpose: "advanced",
				depth: 2,
			},
			{
				id: 43,
				title: "useInsertionEffect",
				version: "18",
				usability: "rarely",
				purpose: "advanced",
				depth: 2,
			},
		],
		depth: 1,
	},
	{
		id: 5,
		title: "Performance Hooks",
		children: [
			{
				id: 51,
				title: "useMemo",
				version: "16",
				usability: "frequent",
				purpose: "intermediate",
				depth: 2,
			},
			{
				id: 52,
				title: "useCallback",
				version: "16",
				usability: "frequent",
				purpose: "intermediate",
				depth: 2,
			},
			{
				id: 53,
				title: "useTransition",
				version: "18",
				usability: "less",
				purpose: "advanced",
				depth: 2,
			},
			{
				id: 54,
				title: "useDeferredValue",
				version: "18",
				usability: "less",
				purpose: "advanced",
				depth: 2,
			},
		],
		depth: 1,
	},
	{
		id: 6,
		title: "Other Hooks",
		children: [
			{
				id: 61,
				title: "useDebugValue",
				version: "16",
				usability: "rarely",
				purpose: "advanced",
				depth: 2,
			},
			{
				id: 62,
				title: "useId",
				version: "18",
				usability: "rarely",
				purpose: "advanced",
				depth: 2,
			},
			{
				id: 63,
				title: "useSyncExternalStore",
				version: "18",
				usability: "rarely",
				purpose: "advanced",
				depth: 2,
			},
		],
		depth: 1,
	},
];

const Node = ({ node, handleNodeClick, expandedNode, expandedDepth2Node, setExpandedDepth2Node }) => {
	const [expanded, setExpanded] = useState(false);

	const toggleExpand = () => {
		if (node.depth === 2) {
			setExpandedDepth2Node(node.id === expandedDepth2Node ? null : node.id);
		} else {
			setExpanded(!expanded);
			handleNodeClick(node.id);
		}
	};

	return (
		<div className={`node-container ${expanded ? "expanded" : ""}`} style={{ top: node.y, left: node.x }}>
			<div className="mindmap-node" onClick={toggleExpand}>
				{node.title}
			</div>
			{(expanded || (node.depth === 2 && expandedDepth2Node === node.id)) && node.children.length > 0 && (
				<div className="children">
					{node.children.map((child) => (
						<React.Fragment key={child.id}>
							<svg className="curve-line">
								<path d={`M0,0 C50,0 50,100 ${child.x - node.x},${child.y - node.y}`} />
							</svg>
							<Node
								node={child}
								handleNodeClick={handleNodeClick}
								expandedNode={expandedNode}
								expandedDepth2Node={expandedDepth2Node}
								setExpandedDepth2Node={setExpandedDepth2Node}
							/>
						</React.Fragment>
					))}
				</div>
			)}
		</div>
	);
};

const setNodePositions = (nodes, depth = 0, parentX = 0, parentY = 0) => {
	const gapX = 50;
	const gapY = 50;
	return nodes.map((node, index) => {
		const x = parentX + gapX;
		const y = parentY + index * gapY;
		const children = node.children ? setNodePositions(node.children, depth + 1, x, y) : [];
		return { ...node, x, y, children, depth };
	});
};

const HooksCheatsheet = () => {
	const [Data, setData] = useState(nodes);
	const [expandedNode, setExpandedNode] = useState(null);
	const [expandedDepth2Node, setExpandedDepth2Node] = useState(null);

	const handleNodeClick = (nodeId) => {
		setExpandedNode(nodeId === expandedNode ? null : nodeId);
	};

	const nodesWithPositions = setNodePositions(Data);
	const filteredData = (filters) => {
		const version = filters.version,
			usability = filters.usability,
			purpose = filters.purpose;

		const List = nodes
			.map((category) => {
				const filteredChildren = category.children.filter((hook) => {
					return (
						(!version || hook.version === version) &&
						(!usability || hook.usability === usability) &&
						(!purpose || hook.purpose === purpose)
					);
				});

				return {
					...category,
					children: filteredChildren,
				};
			})
			.filter((category) => category.children.length > 0);
		setData(List);
	};
	return (
		<>
			<div>
				<Filter filterFunc={filteredData} />
			</div>
			<div className="mindmap-container">
				<div className="mindmap">
					<Node
						node={{ id: 0, title: "Hooks CheatSheet", children: nodesWithPositions, x: 100, y: 100 }}
						handleNodeClick={handleNodeClick}
						expandedNode={expandedNode}
						expandedDepth2Node={expandedDepth2Node}
						setExpandedDepth2Node={setExpandedDepth2Node}
					/>
				</div>
				<div className="details">
					{expandedNode && (
						<div>
							<h2>{Data.find((node) => Data.id === expandedNode)?.title || "Hooks"}</h2>
							<p>Details about {Data.find((node) => Data.id === expandedNode)?.title || "Hooks"}...</p>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default HooksCheatsheet;
