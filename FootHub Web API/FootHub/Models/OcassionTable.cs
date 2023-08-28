using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace FootHub.Models;

public partial class OcassionTable
{
    public int OId { get; set; }

    public string OName { get; set; }

    public int IsAvailable { get; set; }

    [JsonIgnore]
    public virtual ICollection<ProductTable> ProductTables { get; set; } = new List<ProductTable>();
}
