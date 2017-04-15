/*

- Intern
- Junior
- Middle
- Senior
- Lead

- Team Lead
- Tech Lead

- Project Coordinator
- Project Manager

- Architector

- CTO
- COO
- CEO

*/

/*

Intern -> Junior -> Middle -> Senior -> Lead -> Tech Lead -> Architector
< 300     < 800     < 2000    < 3000    < 3500  < 4000       < 6000
                                             -> CTO
                                                < 4500

                                     -> Team Lead
                                        < 3500

Project Coordinator -> Project Manager -> COO
< 1000                 < 2500             < 4000

CEO
< 10000

*/

var Senior = function() {

}

var TeamLead = function() {
    this.team = [];
}

var ProjectCoordinator = function() {

}

var ProjectManager = function() {
    this.manage = function() {}
}

var MultipleInheritance = (function() {

    var inheritanceTree = [];

    var instanceOf = function(searchClass) {

        if (searchClass.name == this.className) {
            return true;
        }

        for (var i = 0; i < inheritanceTree.length; i++) {
            if (inheritanceTree[i].base == searchClass.name &&
                inheritanceTree[i].child == this.className) {
                    return true;
                }
        }

        return false;
    };

    var ext = function(childClass, baseClass) {
        for (var i = 0; i < inheritanceTree.length; i++) {
            if (inheritanceTree[i].child == childClass.name && 
                inheritanceTree[i].base == baseClass.name) {
                    return;
                }
        }

        inheritanceTree.push({
            child: childClass.name,
            base: baseClass.name
        });
    };

    var call = function(functionname) {

    };

    var create = function(baseClass) {
        var instance = new baseClass();
        instance.className = baseClass.name;
        instance.call = call;
        instance.instanceOf = instanceOf;

        return instance;
    }

    return {
        extends: ext,
        create: create
    }
})();

MultipleInheritance.extends(TeamLead, Senior);
MultipleInheritance.extends(ProjectManager, TeamLead);
MultipleInheritance.extends(ProjectManager, ProjectCoordinator);

var pm = MultipleInheritance.create(ProjectManager);
pm.instanceOf(ProjectManager);
pm.instanceOf(TeamLead);
pm.instanceOf(Senior);

var tl = MultipleInheritance.create(TeamLead);
tl.instanceOf(ProjectManager);
//pm.call('manage');