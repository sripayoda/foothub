using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace FootHub.Models;

public partial class CartTable
{
    public int CartId { get; set; }

    public int UId { get; set; }

    public int PId { get; set; }

    [JsonIgnore]
    public virtual ProductTable PIdNavigation { get; set; }
    [JsonIgnore]
    public virtual UserTable UIdNavigation { get; set; }
}
